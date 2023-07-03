app.tabs = {
    name: 'tabs',
    description: 'tabs',
    init() {
        const tabs = document.querySelectorAll('.tab');

        if (!tabs.length) return;

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const activeTab = tab.closest('.tabs').querySelector('.tab.active');
                const activeTabsContent = tab.closest('.tabs').parentElement.querySelector('.tabs-content.active');

                activeTab.setAttribute('aria-selected', false);
                activeTab.classList.remove('active');
                activeTabsContent.classList.remove('active');

                tab.classList.add('active');
                tab.setAttribute('aria-selected', true);
                document.querySelector(`[aria-labelledby=${tab.getAttribute('id')}]`).classList.add('active');
            });
        });
    },
};