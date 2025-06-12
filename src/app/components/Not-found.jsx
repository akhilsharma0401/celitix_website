// components/Custom404.js
import Link from 'next/link';

const Notfound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4rem', color: '#ff6347' }}>404</h1>
      <p style={{ fontSize: '1.5rem' }}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <div style={{ fontSize: '1.2rem', color: '#0070f3', textDecoration: 'underline' }}>
          Go back to homepage
        </div>
      </Link>
    </div>
  );
};

export default Notfound;
