# how to set a theme provider for the project

<!-- creating the ctx -->

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({
children,
}: Readonly<{ children: React.ReactNode }>) => {
const [theme, setTheme] = useState('');

<!-- check the localstorage in browser preference for dark mode first -->

const changeTheme = () => {
if (
localStorage.theme === 'dark' ||
(!('theme' in localStorage) &&
window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
setTheme('dark');
document.documentElement.classList.add('dark');
} else {
setTheme('light');
document.documentElement.classList.remove('dark');
}
};

useEffect(() => {
changeTheme();
}, [theme]);

return (
// @ts-ignore
<ThemeContext.Provider value={{ theme, setTheme }}>
{children}
</ThemeContext.Provider>
);
};

<!-- consuming the ctx by other components -->

export const useTheme = () => {
const context = useContext(ThemeContext);

if (!context) throw new Error('useTheme must be used within a ThemeProvider');

return context;
};

<!--  -->

# how to apply style to list items based on the current location or route

<!-- -->

    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map(item => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
      )
        return (
          <Link
            key={item.id}
            to={item.route}
            className={`flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isActive
                ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        );
      })}
    </section>

}

  <!--  -->
