'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { MOCK_ICOS } from '@/lib/constants';
import { formatCurrency, truncateAddress } from '@/lib/utils';
import { Shield, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export function EscrowManager() {
  const escrowData = MOCK_ICOS.map(ico => ({
    ...ico,
    totalEscrowed: ico.fundsRaised,
    releasedFunds: ico.milestones
      .filter(m => m.status === 'completed')
      .reduce((sum, m) => sum + (ico.fundsRaised * m.releasePercentage / 100), 0),
  }));

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-on-surface mb-2">
          RaiseManager Escrow
        </h2>
        <p className="text-muted-foreground">
          Secure fund management with milestone-based distribution
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Escrow Overview */}
        <Card className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-semibold text-on-surface flex items-center">
            <Shield className="w-5 h-5 mr-2 text-accent" />
            Active Escrows
          </h3>

          <div className="space-y-4">
            {escrowData.map((escrow) => (
              <div key={escrow.icoId} className="bg-muted/20 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-on-surface">{escrow.projectName}</h4>
                    <p className="text-sm text-muted-foreground">
                      {truncateAddress(escrow.escrowAddress)}
                    </p>
                  </div>
                  <Badge variant="verified">Active</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Total Escrowed</div>
                    <div className="text-lg font-semibold text-on-surface">
                      {formatCurrency(escrow.totalEscrowed)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Released</div>
                    <div className="text-lg font-semibold text-accent">
                      {formatCurrency(escrow.releasedFunds)}
                    </div>
                  </div>
                </div>

                <ProgressBar
                  value={escrow.releasedFunds}
                  max={escrow.totalEscrowed}
                  variant="success"
                  showLabel={false}
                />

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {escrow.milestones.filter(m => m.status === 'completed').length} of {escrow.milestones.length} milestones completed
                  </span>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Milestone Status */}
        <Card className="space-y-6">
          <h3 className="text-xl font-semibold text-on-surface">
            Milestone Status
          </h3>

          <div className="space-y-4">
            {MOCK_ICOS[0].milestones.map((milestone) => (
              <div key={milestone.milestoneId} className="flex items-start space-x-3">
                <div className="mt-1">
                  {milestone.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-accent" />
                  )}
                  {milestone.status === 'in-progress' && (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  )}
                  {milestone.status === 'pending' && (
                    <AlertCircle className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-on-surface">
                    {milestone.description}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {milestone.releasePercentage}% release • {formatCurrency(milestone.targetValue)}
                  </p>
                  <div className="mt-2">
                    <ProgressBar
                      value={milestone.currentValue}
                      max={milestone.targetValue}
                      variant={milestone.status === 'completed' ? 'success' : 'warning'}
                      showLabel={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full" variant="outline">
            Request Fund Release
          </Button>
        </Card>
      </div>

      {/* Fund Distribution Flow */}
      <Card className="p-8">
        <h3 className="text-xl font-semibold text-on-surface mb-6 text-center">
          Automated Fund Distribution Flow
        </h3>
        
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-medium text-on-surface">Funds Locked</h4>
            <p className="text-xs text-muted-foreground">Secure escrow</p>
          </div>
          
          <div className="flex-1 h-px bg-border mx-4" />
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-medium text-on-surface">Milestone Met</h4>
            <p className="text-xs text-muted-foreground">Progress verified</p>
          </div>
          
          <div className="flex-1 h-px bg-border mx-4" />
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-medium text-on-surface">Funds Released</h4>
            <p className="text-xs text-muted-foreground">Automatic distribution</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
