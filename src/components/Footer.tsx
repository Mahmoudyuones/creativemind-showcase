
export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="section-container py-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mahmoud Younis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
