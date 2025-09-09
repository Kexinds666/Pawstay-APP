# Pawstay-APP

## PawStay – Cross-Platform Pet Sitting Marketplace App
PawStay is a pet-focused social media platform that offers pet-sitting services by connecting pet owners with trusted local sitters through a location and interest-based matching system, enabling transparent communication and providing access to pet care tips

## Features
- Cross-platform mobile app in React Native
- Authentication, pet listings, booking, real-time chat (placeholder)
- Secure media uploads to S3
- Geolocation-based search with OpenSearch
- Real-time notifications via AppSync
- Payments with Stripe Connect
- IaC with Terraform or Serverless Framework
- CI/CD with GitHub Actions and Fastlane
```
pawstay/
├── README.md
├── .editorconfig
├── .gitignore
├── .nvmrc
├── .npmrc
├── pnpm-workspace.yaml
├── package.json
├── turbo.json
├── tsconfig.base.json
├── .prettierrc
├── .eslintrc.cjs
├── .env.example
├── apps/
│   └── mobile/
│       ├── app.json
│       ├── babel.config.js
│       ├── metro.config.js
│       ├── tsconfig.json
│       ├── package.json
│       ├── index.js
│       ├── ios/
│       ├── android/
│       ├── fastlane/
│       │   ├── Appfile
│       │   ├── Fastfile
│       │   └── Matchfile
│       ├── assets/
│       └── src/
│           ├── app/
│           │   ├── navigation/
│           │   │   ├── RootNavigator.tsx
│           │   │   └── linking.ts
│           │   └── screens/
│           │       ├── Auth/
│           │       │   ├── SignInScreen.tsx
│           │       │   ├── SignUpScreen.tsx
│           │       │   └── ForgotPasswordScreen.tsx
│           │       ├── Listings/
│           │       │   ├── BrowseListingsScreen.tsx
│           │       │   ├── ListingDetailScreen.tsx
│           │       │   └── CreateListingScreen.tsx
│           │       ├── Booking/
│           │       │   ├── CheckoutScreen.tsx
│           │       │   └── BookingsScreen.tsx
│           │       ├── Chat/
│           │       │   ├── ChatListScreen.tsx
│           │       │   └── ChatRoomScreen.tsx
│           │       └── Profile/
│           │           ├── ProfileScreen.tsx
│           │           └── SettingsScreen.tsx
│           ├── components/
│           │   ├── ListingCard.tsx
│           │   ├── MessageBubble.tsx
│           │   └── MapPreview.tsx
│           ├── graphql/
│           │   ├── queries.ts
│           │   ├── mutations.ts
│           │   └── subscriptions.ts
│           ├── lib/
│           │   ├── aws.ts
│           │   ├── apolloClient.ts
│           │   ├── stripe.ts
│           │   ├── storage.ts
│           │   ├── search.ts
│           │   └── env.ts
│           ├── state/
│           │   ├── auth.store.ts
│           │   ├── chat.store.ts
│           │   └── listings.store.ts
│           ├── styles/
│           ├── utils/
│           └── types/
├── packages/
│   ├── ui/
│   │   ├── package.json
│   │   └── src/
│   │       ├── index.tsx
│   │       └── theme.ts
│   ├── models/
│   │   ├── package.json
│   │   └── src/
│   │       └── index.ts
│   └── validation/
│       ├── package.json
│       └── src/
│           └── index.ts
├── services/
│   ├── api/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── bookings/
│   │       │   ├── createBooking.ts
│   │       │   ├── capturePayment.ts
│   │       │   └── refundPayment.ts
│   │       ├── listings/
│   │       │   ├── createListing.ts
│   │       │   ├── updateListing.ts
│   │       │   └── signS3UploadUrl.ts
│   │       ├── search/
│   │       │   └── searchListings.ts
│   │       ├── users/
│   │       │   └── me.ts
│   │       ├── webhooks/
│   │       │   └── stripe.ts
│   │       └── common/
│   │           ├── auth.ts
│   │           ├── ddb.ts
│   │           ├── os.ts
│   │           ├── s3.ts
│   │           └── response.ts
│   └── graphql/
│       ├── schema.graphql
│       ├── mapping-templates/
│       └── resolvers/
│           ├── Query.listings.ts
│           ├── Mutation.createMessage.ts
│           └── Subscription.onMessage.ts
├── infra/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── envs/
│   │   ├── dev.tfvars
│   │   ├── staging.tfvars
│   │   └── prod.tfvars
│   ├── modules/
│   │   ├── s3/
│   │   │   └── main.tf
│   │   ├── dynamodb/
│   │   │   └── main.tf
│   │   ├── cognito/
│   │   │   └── main.tf
│   │   ├── appsync/
│   │   │   └── main.tf
│   │   ├── opensearch/
│   │   │   └── main.tf
│   │   ├── lambdas/
│   │   │   └── main.tf
│   │   ├── apigw/
│   │   │   └── main.tf
│   │   ├── streams/
│   │   │   └── main.tf
│   │   └── iam/
│   │       └── main.tf
│   └── files/
│       ├── graphql/
│       │   └── schema.graphql
│       └── opensearch/
│           └── listings-mapping.json
├── .github/
│   └── workflows/
│       ├── mobile-ci.yml
│       ├── mobile-release.yml
│       ├── services-ci.yml
│       └── terraform-deploy.yml
├── config/
│   ├── codegen.yml
│   ├── opensearch/
│   │   └── listings-mapping.json
│   └── tokens/
│       ├── design-tokens.tokens.json
│       └── resolved-theme.json
└── scripts/
    ├── generate-graphql.ts
    ├── seed-dev-data.ts
    └── smoke-tests.ts
```
Tech Stack
Runtime/Build: Node 18+, pnpm workspaces, Turborepo (optional cache/pipelines)

Mobile: React Native 0.80.5, TypeScript, React Navigation

Design System: Tokens → themed components in packages/ui

Server: AWS SDK v3, Stripe, OpenSearch, S3 presign, DynamoDB

GraphQL: AppSync schema + resolver stubs (subscriptions for chat)

Infra: Terraform 1.6+, modular (S3/DynamoDB implemented)

Automation: GitHub Actions, Fastlane (stubs)

Prerequisites
Node: >= 18.18.0 (.nvmrc provided)

pnpm: >= 10

bash
Copy code
npm i -g pnpm
iOS (optional to run locally): macOS + Xcode

For RN 0.80.5: Xcode 16.0 OK

For RN 0.81.x: Xcode ≥ 16.1 required

CocoaPods:

bash
Copy code
brew install cocoapods
pod --version
Android (optional): Android Studio, JDK 17, Android SDK/NDK, emulator

Monorepo note: RN needs a hoisted layout. We set .npmrc with node-linker=hoisted and related hoist patterns.

Getting Started
Clone or unzip this repo, then:

bash
Copy code
# 1) Install workspace deps
pnpm install

# 2) (iOS only) Install pods after native folders exist
cd apps/mobile/ios && pod install && cd ../../..

# 3) Start Metro (terminal 1)
pnpm dev:mobile

# 4) Run the app (terminal 2)
pnpm ios         # or: pnpm android
Environment variables
Fill ./.env and ./apps/mobile/.env based on *.env.example files when wiring real backends:

ini
Copy code
APP_REGION=us-west-2
APPSYNC_URL=...
COGNITO_USER_POOL_ID=...
COGNITO_WEB_CLIENT_ID=...
STRIPE_PUBLISHABLE_KEY=...
API_BASE_URL=...
S3_BUCKET_PUBLIC_URL=...
Mobile Development Workflow
Commands (root)
bash
Copy code
pnpm dev:mobile     # start Metro
pnpm ios            # run iOS
pnpm android        # run Android
pnpm type-check     # TypeScript checks
pnpm lint           # ESLint
pnpm format         # Prettier write
iOS tips
If Pods fail initially, run:

bash
Copy code
cd apps/mobile/ios
pod repo update
pod install
Apple Silicon: ensure Homebrew is on PATH:

bash
Copy code
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc && source ~/.zshrc
Android tips
Ensure ANDROID_HOME and SDK tools installed in Android Studio.

Create an emulator (Pixel / API 34+) and start it before pnpm android.

Design System & Tokens
Figma tokens are stored at: config/tokens/design-tokens.tokens.json

A resolved color preview is available at: config/tokens/resolved-theme.json

Tokens are applied in packages/ui/src/theme.ts and consumed via:

tsx
Copy code
import { ThemeProvider, useTheme, Button, Card } from 'ui';
// Wrap your app:
<ThemeProvider>{/* ... */}</ThemeProvider>
// Use in components:
const { colors, radius } = useTheme();
Example screen ListingCard shows how to read colors.card, colors.border, etc.

To add more tokens (spacing, typography, elevation), extend theme.ts and update primitives accordingly.

Backend Services (Lambdas)
Located in services/api:

S3 presign: src/listings/signS3UploadUrl.ts

OpenSearch geo search: src/search/searchListings.ts

Stripe: src/bookings/{createBooking,capturePayment,refundPayment}.ts

Stripe webhook: src/webhooks/stripe.ts

Users: src/users/me.ts

Build locally:

bash
Copy code
pnpm -C services/api build
Local stub (simple HTTP server for a “hello” response):

bash
Copy code
pnpm -C services/api dev
# http://localhost:3001
Notes

Replace placeholder secrets with environment variables (Stripe keys, OS endpoint, etc.).

Wire these handlers to API Gateway/Lambda in Terraform (module stubs provided).

GraphQL (AppSync)
Schema: services/graphql/schema.graphql (Listings, Messages, Query/Mutation/Subscription)

Resolver stubs: services/graphql/resolvers/*

Suggested flow:

Provision AppSync in infra/modules/appsync (GraphQL API, resolvers, data sources).

Use codegen (add a real scripts/generate-graphql.ts and a config/codegen.yml) to output typed operations for the app.

Infrastructure (Terraform)
Entry: infra/main.tf

Implemented modules:

S3 (infra/modules/s3): media bucket

DynamoDB (infra/modules/dynamodb): Listings / Messages / Bookings tables

Scaffolded (ready to implement):

cognito, appsync, opensearch, lambdas, apigw, streams, iam, network

Initialize & plan:

bash
Copy code
terraform -chdir=infra init
terraform -chdir=infra plan -var-file=envs/dev.tfvars
# terraform -chdir=infra apply -var-file=envs/dev.tfvars   # when ready
Add outputs for AppSync URL, Cognito IDs, API Gateway endpoints, etc., and propagate to .env files.

CI/CD
GitHub Actions (stubs):

mobile-ci.yml — lint/tests/build hooks for the mobile app

mobile-release.yml — tag-driven release trigger (wire to Fastlane later)

services-ci.yml — build services (esbuild)

terraform-deploy.yml — init/plan/apply (add approvals/secrets for real deploys)

Fastlane (stubs):

apps/mobile/fastlane/{Fastfile,Appfile,Matchfile} — add your Apple/Play credentials and lanes.

Quality: Linting, Types, Formatting
Types: pnpm type-check

Lint: pnpm lint

Format: pnpm format

Recommended pre-commit (Husky/lefthook) can run these checks locally before pushing; add when the repo stabilizes.

