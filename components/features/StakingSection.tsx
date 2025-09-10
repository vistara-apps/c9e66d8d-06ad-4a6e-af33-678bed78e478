'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { STAKING_TIERS } from '@/lib/constants';
import { formatTokenAmount, formatPercentage, calculateStakingRewards } from '@/lib/utils';
import { Lock, TrendingUp, Clock } from 'lucide-react';

export function StakingSection() {
  const [selectedTier, setSelectedTier] = useState<7 | 30 | 90>(30);
  const [stakeAmount, setStakeAmount] = useState<string>('1000');
  const [isStaking, setIsStaking] = useState(false);

  const currentTier = STAKING_TIERS.find(tier => tier.duration === selectedTier)!;
  const estimatedRewards = calculateStakingRewards(
    parseFloat(stakeAmount) || 0,
    currentTier.apy,
    currentTier.duration
  );

  const handleStake = async () => {
    setIsStaking(true);
    // Simulate staking transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsStaking(false);
    // Show success notification
    alert('PUMP tokens staked successfully!');
  };

  return (
    <section id="staking" className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-on-surface mb-2">
          Stake Your PUMP Tokens
        </h2>
        <p className="text-muted-foreground">
          Choose your staking tier and start earning rewards
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Staking Tiers */}
        <Card className="space-y-6">
          <h3 className="text-xl font-semibold text-on-surface flex items-center">
            <Lock className="w-5 h-5 mr-2 text-primary" />
            Staking Tiers
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {STAKING_TIERS.map((tier) => (
              <button
                key={tier.duration}
                onClick={() => setSelectedTier(tier.duration)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedTier === tier.duration
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`w-full h-16 ${tier.color} rounded-md mb-3`} />
                <div className="text-sm font-medium text-on-surface">
                  {tier.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatPercentage(tier.apy)} APY
                </div>
              </button>
            ))}
          </div>

          <div className="bg-muted/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Selected Tier</span>
              <span className="text-sm font-medium text-on-surface">
                {currentTier.label}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">APY</span>
              <span className="text-sm font-medium text-accent">
                {formatPercentage(currentTier.apy)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Lock Period</span>
              <span className="text-sm font-medium text-on-surface">
                {currentTier.duration} days
              </span>
            </div>
          </div>
        </Card>

        {/* Staking Form */}
        <Card className="space-y-6">
          <h3 className="text-xl font-semibold text-on-surface flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-accent" />
            Stake PUMP Tokens
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2">
                Amount to Stake
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Enter amount"
                  min={currentTier.minAmount}
                />
                <div className="absolute right-3 top-3 text-sm text-muted-foreground">
                  PUMP
                </div>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Minimum: {formatTokenAmount(currentTier.minAmount)} PUMP
              </div>
            </div>

            <div className="bg-muted/20 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Estimated Rewards</span>
                <span className="text-sm font-medium text-accent">
                  {formatTokenAmount(estimatedRewards)} PUMP
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Return</span>
                <span className="text-sm font-medium text-on-surface">
                  {formatTokenAmount((parseFloat(stakeAmount) || 0) + estimatedRewards)} PUMP
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  Unlock Date
                </span>
                <span className="text-sm font-medium text-on-surface">
                  {new Date(Date.now() + currentTier.duration * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>

            <Button
              onClick={handleStake}
              loading={isStaking}
              className="w-full"
              disabled={!stakeAmount || parseFloat(stakeAmount) < currentTier.minAmount}
            >
              {isStaking ? 'Staking...' : 'Stake PUMP Tokens'}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
