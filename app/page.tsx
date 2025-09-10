import { AppShell } from '@/components/layout/AppShell';
import { StakingSection } from '@/components/features/StakingSection';
import { ICODashboard } from '@/components/features/ICODashboard';
import { EscrowManager } from '@/components/features/EscrowManager';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PUMP Staking Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Boost your PUMP tokens with smart staking and secure fund management on Base
          </p>
        </section>

        {/* Staking Section */}
        <StakingSection />

        {/* ICO Dashboard */}
        <ICODashboard />

        {/* Escrow Manager */}
        <EscrowManager />
      </div>
    </AppShell>
  );
}
