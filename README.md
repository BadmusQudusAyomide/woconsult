# Woconsult - Global Education Consulting Website

A modern, responsive website for Woconsult, an international education consulting company. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS
- **Interactive Components**: Dynamic navigation, testimonials, FAQ sections
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Ready**: Meta tags and semantic HTML structure

## 📋 Sections

1. **Header**: Navigation with dropdown menus and mobile responsiveness
2. **Hero**: Main landing section with call-to-action
3. **About**: Company information and statistics
4. **Services**: 8 core services offered by Woconsult
5. **Destinations**: Study abroad countries (UK, Ireland, Canada, Australia, USA)
6. **Stats**: Key achievements and numbers
7. **Partners**: Partner universities and accreditations
8. **Testimonials**: Student success stories with carousel
9. **Events**: Upcoming education fairs and workshops
10. **FAQ**: Frequently asked questions with expandable answers
11. **Contact**: Contact form and company information
12. **Footer**: Site links, social media, and floating action buttons

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Webpack 5 with hot reload
- **Development Server**: Webpack Dev Server
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd woconsult
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server and open browser
- `npm run build` - Build for production
- `npm test` - Run tests (placeholder)

## 🏗️ Project Structure

```
woconsult/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Destinations.tsx
│   │   ├── Stats.tsx
│   │   ├── Partners.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Events.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── webpack.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- Primary: Blue shades (#3b82f6 to #1e3a8a)
- Secondary: Gray shades (#64748b to #0f172a)

### Typography

- Font Family: Inter (Google Fonts)
- Responsive text sizes with Tailwind's scale

### Components

All components are built with Tailwind CSS utility classes and can be easily customized by modifying the CSS classes.

## 📱 Responsive Breakpoints

- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🔧 Configuration Files

- **`tailwind.config.js`**: Tailwind CSS configuration
- **`postcss.config.js`**: PostCSS plugins configuration
- **`tsconfig.json`**: TypeScript compiler options
- **`webpack.config.js`**: Webpack build configuration

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about the website, please contact:

- Email: info@woconsult.com
- Website: https://woconsult.com

## 🔮 Future Enhancements

- [ ] Blog system integration
- [ ] Student portal
- [ ] Online application system
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Chat bot integration
- [ ] Video testimonials
- [ ] Interactive maps for locations

---

**Built with ❤️ by the Woconsult Team**
