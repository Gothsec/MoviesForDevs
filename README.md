# MoviesForDevs
![image](https://github.com/user-attachments/assets/9d774555-6bc7-48e6-b13e-af1fbb45a756)
![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

## **Stack**  
![Next](https://img.shields.io/badge/Next-171717?logo=next.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

## **Project structure**
```
public/
└── favicon.png
src/
├── app/
|    ├── movie/
|    |    └── [id]/
|    |         └── page.tsx
|    ├── globals.css
|    ├── layout.tsx
|    └── page.tsx
└── components/
     ├── footer.tsx
     ├── hero.tsx
     ├── main.tsx
     ├── movieData.ts
     └── navbar.tsx
```

## **Local configuration** 
1. Clone the repo:  
```
git clone https://github.com/gothsec/moviesfordevs
```
2. Install dependencies:
```  
npm install
```
3. Create a `.env.local` file with `NEXT_PUBLIC_OMDB_API_KEY=your_api_key` and `NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key`, then start the development server:
```  
npm run dev
```
---
You can contribute if you want :)
