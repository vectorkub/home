export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const theme = localStorage.getItem('vectorkub-theme') || 'light';
            if (theme === 'system') {
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              document.documentElement.classList.add(systemTheme);
            } else {
              document.documentElement.classList.add(theme);
            }
          } catch (e) {}
        `,
      }}
    />
  )
}