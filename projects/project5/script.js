// Данные новостей (локальные изображения в виде фона)
const newsData = [
    {
        id: 1,
        title: "Новые технологии искусственного интеллекта представлены на конференции",
        excerpt: "Ведущие компании мира представили свои последние разработки в области искусственного интеллекта на ежегодной конференции в Сан-Франциско.",
        content: "Полный текст новости о технологиях искусственного интеллекта...",
        category: "technology",
        date: "2023-10-15",
        author: "Алексей Иванов",
        readTime: "4 мин",
        color: "#4cc9f0"
    },
    {
        id: 2,
        title: "Парламент принял новый закон о цифровой экономике",
        excerpt: "Государственная дума приняла закон, направленный на развитие цифровой экономики и регулирование криптовалют в России.",
        content: "Полный текст новости о цифровой экономике...",
        category: "politics",
        date: "2023-10-14",
        author: "Мария Петрова",
        readTime: "5 мин",
        color: "#ff6b6b"
    },
    {
        id: 3,
        title: "Сборная России одержала победу в отборочном матче",
        excerpt: "Российская сборная по футболу выиграла важный отборочный матч со счётом 2:1, приблизившись к выходу на чемпионат мира.",
        content: "Полный текст новости о спорте...",
        category: "sports",
        date: "2023-10-13",
        author: "Дмитрий Соколов",
        readTime: "3 мин",
        color: "#52b788"
    },
    {
        id: 4,
        title: "Учёные нашли новое средство против старения клеток",
        excerpt: "Международная группа исследователей объявила о разработке препарата, способного замедлять процесс старения на клеточном уровне.",
        content: "Полный текст новости о здоровье...",
        category: "health",
        date: "2023-10-12",
        author: "Елена Кузнецова",
        readTime: "6 мин",
        color: "#ff9e00"
    },
    {
        id: 5,
        title: "Крупнейшие IT-компании объявили о рекордных прибылях",
        excerpt: "Ведущие технологические корпорации мира отчитались о рекордных финансовых результатах за третий квартал текущего года.",
        content: "Полный текст новости о бизнесе...",
        category: "business",
        date: "2023-10-11",
        author: "Анна Сидорова",
        readTime: "4 мин",
        color: "#7209b7"
    },
    {
        id: 6,
        title: "Новый фильм российского режиссёра получил приз на кинофестивале",
        excerpt: "Картина молодого российского режиссёра завоевала главный приз на престижном международном кинофестивале в Европе.",
        content: "Полный текст новости о развлечениях...",
        category: "entertainment",
        date: "2023-10-10",
        author: "Сергей Николаев",
        readTime: "3 мин",
        color: "#f72585"
    },
    {
        id: 7,
        title: "Разработка квантовых компьютеров вышла на новый уровень",
        excerpt: "Учёные сообщили о прорыве в создании квантовых компьютеров, которые смогут решать задачи, недоступные для классических компьютеров.",
        content: "Полный текст новости о технологиях...",
        category: "technology",
        date: "2023-10-09",
        author: "Алексей Иванов",
        readTime: "5 мин",
        color: "#4cc9f0"
    },
    {
        id: 8,
        title: "Министр иностранных дел выступил с важным заявлением",
        excerpt: "Глава МИД России выступил с речью на Генеральной Ассамблее ООН, затронув вопросы международной безопасности и сотрудничества.",
        content: "Полный текст новости о политике...",
        category: "politics",
        date: "2023-10-08",
        author: "Мария Петрова",
        readTime: "4 мин",
        color: "#ff6b6b"
    },
    {
        id: 9,
        title: "Новый вид спорта включили в программу Олимпийских игр",
        excerpt: "Международный олимпийский комитет объявил о включении нового вида спорта в программу следующих летних Олимпийских игр.",
        content: "Полный текст новости о спорте...",
        category: "sports",
        date: "2023-10-07",
        author: "Дмитрий Соколов",
        readTime: "3 мин",
        color: "#52b788"
    },
    {
        id: 10,
        title: "Врачи рассказали о пользе средиземноморской диеты",
        excerpt: "Специалисты по питанию подтвердили, что средиземноморская диета значительно снижает риск сердечно-сосудистых заболеваний.",
        content: "Полный текст новости о здоровье...",
        category: "health",
        date: "2023-10-06",
        author: "Елена Кузнецова",
        readTime: "4 мин",
        color: "#ff9e00"
    },
    {
        id: 11,
        title: "Биржевые индексы выросли после положительных экономических данных",
        excerpt: "Мировые фондовые индексы продемонстрировали рост после публикации позитивных макроэкономических показателей в крупнейших экономиках.",
        content: "Полный текст новости о бизнесе...",
        category: "business",
        date: "2023-10-05",
        author: "Анна Сидорова",
        readTime: "5 мин",
        color: "#7209b7"
    },
    {
        id: 12,
        title: "Известный музыкант анонсировал мировой тур",
        excerpt: "Популярный исполнитель объявил о начале мирового концертного тура, который охватит более 50 городов по всему миру.",
        content: "Полный текст новости о развлечениях...",
        category: "entertainment",
        date: "2023-10-04",
        author: "Сергей Николаев",
        readTime: "3 мин",
        color: "#f72585"
    }
];

// Категории новостей
const categories = {
    'all': 'Все новости',
    'politics': 'Политика',
    'technology': 'Технологии',
    'sports': 'Спорт',
    'health': 'Здоровье',
    'business': 'Бизнес',
    'entertainment': 'Развлечения'
};

// Иконки для категорий
const categoryIcons = {
    'politics': 'fa-landmark',
    'technology': 'fa-microchip',
    'sports': 'fa-futbol',
    'health': 'fa-heartbeat',
    'business': 'fa-chart-line',
    'entertainment': 'fa-film',
    'all': 'fa-newspaper'
};

// DOM элементы
const elements = {
    newsGrid: document.getElementById('newsGrid'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    dateFilter: document.getElementById('dateFilter'),
    resultsCount: document.getElementById('resultsCount'),
    searchStatus: document.getElementById('searchStatus'),
    loadingIndicator: document.getElementById('loadingIndicator'),
    emptyState: document.getElementById('emptyState'),
    resetFilters: document.getElementById('resetFilters'),
    resetSearchBtn: document.getElementById('resetSearchBtn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileCloseBtn: document.getElementById('mobileCloseBtn'),
    mobileNav: document.getElementById('mobileNav'),
    themeToggle: document.querySelector('.theme-toggle'),
    navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link')
};

// Состояние приложения
const state = {
    filteredNews: [...newsData],
    currentCategory: 'all',
    searchQuery: '',
    debounceTimer: null,
    isLoading: false
};

// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('ru-RU', options);
}

// Получение времени чтения
function getReadTime(minutes) {
    return `${minutes} мин чтения`;
}

// Генерация карточки новости
function createNewsCard(article) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.setAttribute('data-category', article.category);
    card.setAttribute('data-id', article.id);
    
    // Форматирование даты
    const formattedDate = formatDate(article.date);
    
    // Создание заголовка с иконкой категории
    const iconClass = categoryIcons[article.category] || 'fa-newspaper';
    
    card.innerHTML = `
        <div class="news-image" style="background: linear-gradient(135deg, ${article.color}22, ${article.color});">
            <i class="fas ${iconClass}"></i>
        </div>
        <div class="news-content">
            <div class="news-meta">
                <div class="news-date">
                    <i class="far fa-clock"></i>
                    ${formattedDate}
                </div>
                <span class="news-category category-${article.category}">
                    ${categories[article.category]}
                </span>
            </div>
            <h3 class="news-title">
                <a href="#" onclick="event.preventDefault(); showArticleDetails(${article.id})">
                    ${article.title}
                </a>
            </h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="news-footer">
                <div class="news-author">
                    <i class="fas fa-user-edit"></i>
                    <span>${article.author}</span>
                </div>
                <a href="#" class="read-more" onclick="event.preventDefault(); showArticleDetails(${article.id})">
                    Читать <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Отображение сетки новостей
function renderNewsGrid(articles) {
    elements.newsGrid.innerHTML = '';
    
    if (articles.length === 0) {
        elements.emptyState.classList.add('active');
        return;
    }
    
    elements.emptyState.classList.remove('active');
    
    articles.forEach(article => {
        const card = createNewsCard(article);
        elements.newsGrid.appendChild(card);
    });
    
    // Обновление счетчика результатов
    updateResultsCount(articles.length);
}

// Обновление счетчика результатов
function updateResultsCount(count) {
    elements.resultsCount.textContent = count;
    
    // Обновление статуса поиска
    if (state.searchQuery) {
        elements.searchStatus.innerHTML = `
            <i class="fas fa-search"></i>
            <span>По запросу "${state.searchQuery}" найдено ${count} новостей</span>
        `;
    } else if (state.currentCategory !== 'all') {
        elements.searchStatus.innerHTML = `
            <i class="fas ${categoryIcons[state.currentCategory]}"></i>
            <span>${categories[state.currentCategory]} • ${count} новостей</span>
        `;
    } else {
        elements.searchStatus.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Все новости загружены</span>
        `;
    }
}

// Фильтрация новостей
function filterNews() {
    state.isLoading = true;
    elements.loadingIndicator.classList.add('active');
    
    // Имитация задержки для лучшего UX
    setTimeout(() => {
        const searchQuery = state.searchQuery.toLowerCase().trim();
        const selectedCategory = elements.categoryFilter.value;
        const dateFilter = elements.dateFilter.value;
        
        // Фильтрация по поисковому запросу и категории
        let results = newsData.filter(article => {
            const matchesSearch = !searchQuery || 
                article.title.toLowerCase().includes(searchQuery) ||
                article.excerpt.toLowerCase().includes(searchQuery) ||
                article.content.toLowerCase().includes(searchQuery);
            
            const matchesCategory = selectedCategory === 'all' || 
                article.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        // Фильтрация по дате
        results = filterByDate(results, dateFilter);
        
        // Сортировка
        results.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            
            if (dateFilter === 'oldest') {
                return dateA - dateB;
            }
            return dateB - dateA;
        });
        
        state.filteredNews = results;
        state.currentCategory = selectedCategory;
        
        renderNewsGrid(state.filteredNews);
        
        state.isLoading = false;
        elements.loadingIndicator.classList.remove('active');
        
        // Прокрутка к началу сетки новостей
        elements.newsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

// Фильтрация по дате
function filterByDate(articles, dateFilter) {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    switch(dateFilter) {
        case 'last-week':
            return articles.filter(article => {
                const articleDate = new Date(article.date);
                return articleDate >= weekAgo;
            });
        case 'last-month':
            return articles.filter(article => {
                const articleDate = new Date(article.date);
                return articleDate >= monthAgo;
            });
        default:
            return articles;
    }
}

// Функция debounce для поиска
function debounce(func, delay) {
    return function(...args) {
        clearTimeout(state.debounceTimer);
        state.debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Сброс фильтров
function resetFilters() {
    elements.searchInput.value = '';
    elements.categoryFilter.value = 'all';
    elements.dateFilter.value = 'newest';
    state.searchQuery = '';
    filterNews();
    
    // Сброс активных категорий в навигации
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === 'all') {
            link.classList.add('active');
        }
    });
}

// Показать детали статьи (заглушка для демонстрации)
function showArticleDetails(articleId) {
    const article = newsData.find(a => a.id === articleId);
    if (!article) return;
    
    alert(`Просмотр статьи: ${article.title}\n\n${article.content}\n\nАвтор: ${article.author}\nДата: ${formatDate(article.date)}`);
}

// Переключение темы
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Обновление иконки
    const icon = elements.themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Обработка кликов по категориям в навигации
function handleCategoryClick(event) {
    event.preventDefault();
    
    const clickedLink = event.currentTarget;
    const category = clickedLink.getAttribute('data-category');
    
    // Обновление активного состояния
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
    
    // Обновление фильтра
    elements.categoryFilter.value = category;
    
    // Применение фильтра
    filterNews();
    
    // Закрытие мобильного меню
    if (window.innerWidth <= 768) {
        elements.mobileNav.classList.remove('active');
    }
}

// Инициализация приложения
function init() {
    // Установка темы из localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Обновление иконки темы
    const themeIcon = elements.themeToggle.querySelector('i');
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Рендеринг начальных новостей
    renderNewsGrid(state.filteredNews);
    
    // Настройка обработчиков событий
    setupEventListeners();
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Поиск с debounce
    elements.searchInput.addEventListener('input', debounce(function() {
        state.searchQuery = this.value;
        filterNews();
    }, 300));
    
    // Фильтры
    elements.categoryFilter.addEventListener('change', filterNews);
    elements.dateFilter.addEventListener('change', filterNews);
    
    // Сброс фильтров
    elements.resetFilters.addEventListener('click', resetFilters);
    elements.resetSearchBtn.addEventListener('click', resetFilters);
    
    // Навигация по категориям
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });
    
    // Мобильное меню
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileNav.classList.add('active');
    });
    
    elements.mobileCloseBtn.addEventListener('click', () => {
        elements.mobileNav.classList.remove('active');
    });
    
    // Переключение темы
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Закрытие мобильного меню при клике на ссылку
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            elements.mobileNav.classList.remove('active');
        });
    });
    
    // Закрытие мобильного меню при клике вне его области
    document.addEventListener('click', (event) => {
        if (!elements.mobileNav.contains(event.target) && 
            !elements.mobileMenuBtn.contains(event.target) &&
            elements.mobileNav.classList.contains('active')) {
            elements.mobileNav.classList.remove('active');
        }
    });
    
    // Обработка клавиши Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            elements.mobileNav.classList.remove('active');
        }
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Запуск приложения при загрузке DOM
document.addEventListener('DOMContentLoaded', init);

// Экспорт функций для использования в консоли разработчика
window.app = {
    filterNews,
    resetFilters,
    showArticleDetails,
    toggleTheme
};