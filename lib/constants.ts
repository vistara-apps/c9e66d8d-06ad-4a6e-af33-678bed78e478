import { StakingTier } from './types';

export const STAKING_TIERS: StakingTier[] = [
  {
    duration: 7,
    apy: 5,
    color: 'bg-orange-500',
    label: '7-day',
    minAmount: 100,
  },
  {
    duration: 30,
    apy: 12,
    color: 'bg-yellow-500',
    label: '30-day',
    minAmount: 500,
  },
  {
    duration: 90,
    apy: 25,
    color: 'bg-green-500',
    label: '90-day',
    minAmount: 1000,
  },
];

export const MOCK_ICOS = [
  {
    icoId: '1',
    projectName: 'DeFi Protocol X',
    tokenName: 'Protocol X Token',
    tokenSymbol: 'PXT',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-02-15'),
    fundsRaised: 750000,
    targetFunds: 1000000,
    deploymentStatus: 'deployed' as const,
    escrowAddress: '0x1234...5678',
    description: 'Revolutionary DeFi protocol for yield farming',
    milestones: [
      {
        milestoneId: '1',
        icoId: '1',
        description: 'MVP Development',
        targetValue: 250000,
        currentValue: 250000,
        status: 'completed' as const,
        releasePercentage: 25,
      },
      {
        milestoneId: '2',
        icoId: '1',
        description: 'Beta Launch',
        targetValue: 500000,
        currentValue: 400000,
        status: 'in-progress' as const,
        releasePercentage: 35,
      },
    ],
  },
  {
    icoId: '2',
    projectName: 'NFT Marketplace',
    tokenName: 'Market Token',
    tokenSymbol: 'MKT',
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-03-01'),
    fundsRaised: 320000,
    targetFunds: 800000,
    deploymentStatus: 'deployed' as const,
    escrowAddress: '0x5678...9012',
    description: 'Next-generation NFT marketplace with AI curation',
    milestones: [
      {
        milestoneId: '3',
        icoId: '2',
        description: 'Platform Development',
        targetValue: 200000,
        currentValue: 200000,
        status: 'completed' as const,
        releasePercentage: 30,
      },
    ],
  },
];

export const TRANSACTION_FEE_PERCENTAGE = 0.5;
