# Online Caro Game (Cờ Caro Online)

## Description | Mô tả
An online multiplayer Caro (Gomoku) game built with modern web technologies.
Trò chơi cờ Caro trực tuyến nhiều người chơi được xây dựng với các công nghệ web hiện đại.

## Technologies Used | Công nghệ sử dụng
### Frontend
- React + TypeScript
- Vite
- Node.js

### Backend
- Node.js
- Express.js
- Socket.IO (for real-time gameplay)

## Prerequisites | Yêu cầu trước khi cài đặt
- Node.js (version 14.0 or higher)
- npm (Node Package Manager)

## Installation | Cài đặt

### 1. Clone the repository | Clone dự án
```bash
git clone [repository-url]
cd online_caro
```

### 2. Frontend Setup | Cài đặt Frontend
```bash
cd client
npm install
npm run dev
```

### 3. Backend Setup | Cài đặt Backend
```bash
cd server
npm install
```

### 4. Environment Configuration | Cấu hình môi trường

#### Backend (.env)
Create a `.env` file in the server directory with the following content:
```
PORT=3000
```

## Running the Application | Chạy ứng dụng

### Start the Backend Server | Khởi động máy chủ Backend
```bash
cd server
npm start
```

### Start the Frontend Development Server | Khởi động máy chủ Frontend
```bash
cd client
npm run dev
```

## Project Structure | Cấu trúc dự án
```
online_caro/
├── client/                 # Frontend application
│   ├── src/               # Source files
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
│
└── server/                # Backend application
    ├── src/              # Source files
    ├── .env              # Environment variables
    └── package.json      # Backend dependencies
```

## Contributing | Đóng góp
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License | Giấy phép
This project is licensed under the MIT License - see the LICENSE file for details.
Dự án này được cấp phép theo Giấy phép MIT - xem tệp LICENSE để biết chi tiết.

## Contact | Liên hệ
[Trần Minh Quân] - [mquan592003@gmail.com]
Project Link: [repository-url]

