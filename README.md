# Fullstack AppSync Events 4-in-a-Row

![gameplay](https://github.com/user-attachments/assets/6e0506c7-71d1-4586-b1ce-683e7401b828)

## Overview

Fullstack 4-in-a-Row is a real-time multiplayer game built using AWS Amplify, AWS AppSync Event API, and React. Challenge your friends to a classic connect four game with real-time updates and in-game chat functionality.

## Features

- 🎮 Real-time 4-in-a-Row gameplay
- 💬 In-game chat system
- 🔐 User authentication
- 🎟️ Game room creation and joining
- 📡 Powered by AWS AppSync Event API

## Tech Stack

![archoverview](https://github.com/user-attachments/assets/ef5fe379-4de6-4dd7-9ca8-74fb0f0312e8)

- **Frontend:** React (v0)
- **Backend:** AWS Amplify
- **Real-time Communication:** AWS AppSync Event API
- **Infrastructure:** AWS CDK

## Prerequisites

- Node.js (v18+)
- AWS Account
- AWS Amplify CLI
- npm or yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fullstack-appsync-events-4-in-a-row.git
cd fullstack-appsync-events-4-in-a-row
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Deploy Backend

```bash
npx ampx sandbox
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Game Mechanics

![intro-4](https://github.com/user-attachments/assets/f9b8d6ce-68c6-4872-9a66-cc04df4f256d)

The game follows the classic Connect Four rules:

1. Create a new game room
2. Share the room code with a friend
3. Take turns placing your colored discs
4. First player to connect four discs wins!

Players can:
- Drop discs in any column
- Chat with their opponent
- See real-time game updates
- Track their win/loss record

## Key Components

### Home Screen
- Game room creation
- Room joining functionality
- User authentication
- Game history

### Game Board
- Interactive 6x7 grid
- Real-time disc placement
- Win detection
- Turn management

### Chat Interface
- Real-time messaging
- Player status updates
- Game notifications
- Emoji support

### User Management
- Authentication flow
- Player profiles
- Statistics tracking
- Friend system

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Board/
│   │   ├── Chat/
│   │   └── UserAuth/
│   ├── graphql/
│   │   ├── mutations/
│   │   ├── queries/
│   │   └── subscriptions/
│   └── utils/
├── amplify/
│   ├── backend/
│   └── hooks/
└── public/
```

## Development

### Local Development

1. Start the local development server:
```bash
npm run dev
```

2. Open http://localhost:3000 in your browser

### Testing

Run the test suite:
```bash
npm test
```

## Deployment

1. Initialize Amplify:
```bash
amplify init
```

2. Push changes:
```bash
amplify push
```

3. Deploy to hosting:
```bash
amplify publish
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more information.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

## Acknowledgments

- AWS Amplify team for the excellent documentation
- The React community for inspiration and support
- All contributors who helped improve this project