// js/pgov-demo.js
function switchPgovTab(tabName) {
    const tabs = ['rondas', 'presentismo', 'novedades'];
    tabs.forEach(tab => {
        const btn = document.getElementById(`tab-btn-${tab}`);
        const content = document.getElementById(`tab-content-${tab}`);
        
        if (btn && content) {
            if (tab === tabName) {
                btn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
                btn.classList.remove('bg-slate-800', 'text-slate-300');
                content.classList.remove('hidden');
            } else {
                btn.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
                btn.classList.add('bg-slate-800', 'text-slate-300');
                content.classList.add('hidden');
            }
        }
    });
}


