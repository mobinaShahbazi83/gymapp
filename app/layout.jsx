
import "./globals.css";



export const metadata ={
  title: "پروژه باشگاه| gym project",
  };

export default function RootLayout({children}) {

  return (
    <html lang="fa" >
      <body>
          {children}
      </body>
    </html>
  );
}
