# PUMP Staking Hub

A comprehensive Base Mini App for PUMP token staking, ICO visualization, and secure escrow fund management.

## Features

- **PUMP Token Staking**: Flexible staking tiers (7, 30, 90 days) with competitive APY rates
- **ICO Visualization Dashboard**: Track ongoing and past ICOs with detailed metrics
- **RaiseManager Escrow**: Secure fund distribution based on milestone completion
- **Automated Smart Contract Deployment**: Pre-audited contracts for token sales
- **KYC/AML Integration**: Seamless investor verification

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Base App**:
   Navigate to `http://localhost:3000` in Base App or compatible Farcaster client

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard
│   ├── providers.tsx      # MiniKit + OnchainKit setup
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   └── features/          # Feature-specific components
├── lib/
│   ├── types.ts           # TypeScript definitions
│   ├── constants.ts       # App constants
│   └── utils.ts           # Utility functions
```

## Key Components

### Staking System
- Multiple staking tiers with different lock periods and APY rates
- Real-time reward calculations
- Secure transaction handling through Base network

### ICO Dashboard
- Visual progress tracking for active ICOs
- Milestone-based fund release visualization
- Investor participation metrics

### Escrow Management
- Automated fund distribution based on milestone completion
- Transparent progress tracking
- Secure smart contract integration

## Design System

The app uses a custom design system with:
- **Colors**: Dark theme with blue primary and green accent
- **Typography**: Clean, readable font hierarchy
- **Components**: Consistent UI patterns across all features
- **Responsive**: Mobile-first design optimized for Base App

## Base Mini App Features

- **Frame Actions**: View ICOs, check staking status, initiate transactions
- **Save Frame Requirement**: Users must save frame for on-chain transactions
- **Notifications**: Real-time updates for staking, rewards, and milestones
- **Primary Button**: Context-aware actions (Stake/Invest/Claim)

## Development

### Adding New Features

1. Define types in `lib/types.ts`
2. Add constants to `lib/constants.ts`
3. Create UI components in `components/ui/`
4. Build feature components in `components/features/`
5. Integrate with main dashboard

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the custom design system tokens
- Ensure mobile-first responsive design
- Maintain consistent spacing and colors

## Deployment

The app is optimized for deployment on Base network with:
- Proper environment variable configuration
- Optimized build settings for Mini Apps
- Base-specific wallet integration

## License

MIT License - see LICENSE file for details
