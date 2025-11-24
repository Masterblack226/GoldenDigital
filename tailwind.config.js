module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional authority
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800 - Primary
          900: "#1E40AF", // blue-900
          DEFAULT: "#1E3A8A", // blue-800
        },
        // Secondary Colors - Supporting hierarchy
        secondary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500 - Secondary
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800
          900: "#1E40AF", // blue-900
          DEFAULT: "#3B82F6", // blue-500
        },
        // Accent Colors - Conversion moments
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 - Accent
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
          DEFAULT: "#F59E0B", // amber-500
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          50: "#F8FAFC", // slate-50 - Surface
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          DEFAULT: "#F8FAFC", // slate-50
        },
        // Text Colors
        text: {
          primary: "#111827", // gray-900
          secondary: "#6B7280", // gray-500
          muted: "#9CA3AF", // gray-400
        },
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          DEFAULT: "#10B981", // emerald-500
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          DEFAULT: "#F59E0B", // amber-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          DEFAULT: "#EF4444", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Headlines and accents
        body: ['Inter', 'sans-serif'], // Body text and CTAs
        sans: ['Inter', 'sans-serif'], // Default sans-serif
        serif: ['Playfair Display', 'serif'], // Default serif
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'portfolio': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Portfolio cards
        'cta': '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // CTA buttons
        'cta-hover': '0 15px 25px -5px rgba(0, 0, 0, 0.15)', // CTA hover state
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1)', // Subtle elevation
      },
      transitionDuration: {
        '250': '250ms', // Standard transition duration
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out', // Standard easing
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
      },
      borderRadius: {
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
      },
    },
  },
  plugins: [],
}