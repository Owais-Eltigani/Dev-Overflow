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

  <!-- query string and debounce for search   -->

useEffect(() => {
const delayDebounceFn = setTimeout(() => {
if (search) {
const newUrl = formUrlQuery({
params: searchParams.toString(),
key: 'q',
value: search,
});

        router.push(newUrl, { scroll: false });
      } else {
        console.log(route, pathname);
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['q'],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

}

<!--  -->

<!-- filters -->

const searchParams = useSearchParams();
const router = useRouter();

const [active, setActive] = useState('');

const handleTypeClick = (item: string) => {
if (active === item) {
setActive('');

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: null,
      });

      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: item.toLowerCase(),
      });

      router.push(newUrl, { scroll: false });
    }

    <!--  -->

<!-- pagination -->

// Calculcate the number of posts to skip based on the page number and page size
const skipAmount = (page - 1) \* pageSize;

    // Create the query object based on the search parameters

const questions = await Question.find(query)
.populate({ path: 'tags', model: Tag })
.populate({ path: 'author', model: User })
.skip(skipAmount)
.limit(pageSize)
.sort(sortOptions);

       const totalQuestions = await Question.countDocuments(query);

    const isNext = totalQuestions > skipAmount + questions.length;

    return { questions, isNext };

    <!--  -->

<!-- global search  -->

await connectToDatabase();

    const { query, type } = params;
    const regexQuery = { $regex: query, $options: 'i' };

    let results = [];

    const modelsAndTypes = [
      { model: Question, searchField: 'title', type: 'question' },
      { model: User, searchField: 'name', type: 'user' },
      { model: Answer, searchField: 'content', type: 'answer' },
      { model: Tag, searchField: 'name', type: 'tag' },
    ];

    const typeLower = type?.toLowerCase();

    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      // SEARCH ACROSS EVERYTHING

      // ? you cannot use async with .map or foreach just use simple for ... of
      for (const { model, searchField, type } of modelsAndTypes) {
        const queryResults = await model
          .find({ [searchField]: regexQuery })
          .limit(2);

        results.push(
          ...queryResults.map(item => ({
            title:
              type === 'answer'
                ? `Answers containing ${query}`
                : item[searchField],
            type,
            id:
              type === 'user'
                ? item.clerkid
                : type === 'answer'
                ? item.question
                : item._id,
          }))
        );
      }
    } else {
      // SEARCH IN THE SPECIFIED MODEL TYPE
      const modelInfo = modelsAndTypes.find(item => item.type === type);

      console.log({ modelInfo, type });
      if (!modelInfo) {
        throw new Error('Invalid search type');
      }

      const queryResults = await modelInfo.model
        .find({ [modelInfo.searchField]: regexQuery })
        .limit(8);

      results = queryResults.map(item => ({
        title:
          type === 'answer'
            ? `Answers containing ${query}`
            : item[modelInfo.searchField],
        type,
        id:
          type === 'user'
            ? item.clerkId
            : type === 'answer'
            ? item.question
            : item._id,
      }));
    }

<!--  -->
