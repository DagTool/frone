'use client';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Sản phẩm', href: '#product' },
  { label: 'Dự án tiêu biểu', href: '#case-studies' },
  { label: 'Liên hệ', href: '#contact' },
];
export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    const handleResize = () => { if (window.innerWidth > 720) setOpen(false); };
    window.addEventListener('keydown', handleKey); window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('keydown', handleKey); window.removeEventListener('resize', handleResize); };
  }, []);
  return <main className="page" id="home">
    <div className="background" aria-hidden="true"><video autoPlay muted loop playsInline><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4" type="video/mp4"/></video></div>
    <header className="header">
      <a className="logo" href="#home" aria-label="Về trang chủ DigiX"><img src="/digix-logo.svg" alt="" width="52" height="52"/></a>
      <nav className="desktop-nav" aria-label="Điều hướng chính">{links.map((link, i) => <a key={link.href} className={i === 0 ? 'active' : ''} href={link.href}>{link.label}</a>)}</nav>
      <a className="sign-in" href="#contact">Đăng nhập</a>
      <button className={'menu-toggle ' + (open ? 'is-open' : '')} aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span/><span/><span/></button>
    </header>
    {open && <><button className="overlay" aria-label="Đóng menu" onClick={() => setOpen(false)} /><nav className="mobile-menu" id="mobile-menu" aria-label="Điều hướng trên điện thoại">{links.map((link, i) => <a key={link.href} className={i === 0 ? 'active' : ''} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="mobile-signin" href="#contact" onClick={() => setOpen(false)}>Đăng nhập ↗</a></nav></>}
    <section className="hero" aria-labelledby="headline">
      <div className="eyebrow anim" style={{'--d':'.1s'}}><span/> TRÍ TUỆ LUÔN CHUYỂN ĐỘNG</div>
      <h1 className="headline" id="headline"><span>Một Nền Tảng</span><span>Vạn Tiềm Năng</span></h1>
      <p className="subhead anim" style={{'--d':'.28s'}}>“DigiX không chỉ cung cấp công nghệ, mà còn giúp nhìn lại và tối ưu toàn bộ cách thức vận hành”.</p>
      <a className="cta anim" style={{'--d':'.4s'}} href="#contact">Bắt đầu</a>
    </section>
  </main>;
}

