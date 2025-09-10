'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { MOCK_ICOS } from '@/lib/constants';
import { formatCurrency, formatTimeRemaining } from '@/lib/utils';
import { Rocket, Users, Calendar, Target } from 'lucide-react';

export function ICODashboard() {
  return (
    <section id="icos" className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-on-surface mb-2">
          ICO Dashboard
        </h2>
        <p className="text-muted-foreground">
          Discover and invest in promising projects on Base
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOCK_ICOS.map((ico) => (
          <Card key={ico.icoId} variant="elevated" className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-on-surface">
                  {ico.projectName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ico.tokenSymbol} • {ico.description}
                </p>
              </div>
              <Badge variant="verified">
                {ico.deploymentStatus}
              </Badge>
            </div>

            <ProgressBar
              value={ico.fundsRaised}
              max={ico.targetFunds}
              variant="success"
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Target className="w-4 h-4 mr-2" />
                  Target
                </div>
                <div className="text-lg font-semibold text-on-surface">
                  {formatCurrency(ico.targetFunds)}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Time Left
                </div>
                <div className="text-lg font-semibold text-on-surface">
                  {formatTimeRemaining(ico.endDate)}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {Math.floor(Math.random() * 500) + 100} investors
                </div>
                <div className="flex items-center">
                  <Rocket className="w-4 h-4 mr-1" />
                  {ico.milestones.length} milestones
                </div>
              </div>
              <Button size="sm">
                Invest Now
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="text-center py-8">
        <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-xl font-semibold text-on-surface mb-2">
          Launch Your ICO
        </h3>
        <p className="text-muted-foreground mb-4">
          Deploy secure, pre-audited smart contracts for your token sale
        </p>
        <Button>
          Create ICO
        </Button>
      </Card>
    </section>
  );
}
