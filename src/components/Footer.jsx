 function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 text-center">
      <p>Made with ❤️ by Shehroz Bibi | Open to work remotely</p>
      <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Shehroz Bibi. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/SHEHROZ-BIBI5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
        </a>
        {/* Add more icons/links if you want */}
      </div>
    </footer>
  );
}

export default Footer;