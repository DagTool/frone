import './globals.css';

export const metadata = { title: 'Một Nền Tảng, Vạn Tiềm Năng | DigiX', description: 'DigiX giúp doanh nghiệp nhìn lại và tối ưu cách thức vận hành bằng công nghệ.' };
export default function RootLayout({ children }) {
  return <html lang="vi"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer"/></head><body>{children}</body></html>;
}
