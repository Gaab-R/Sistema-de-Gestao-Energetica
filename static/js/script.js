document.addEventListener('DOMContentLoaded', function() {
    try {
        // Lê dados
        const body = document.body;
        const ultimo_dado_json = body.getAttribute('data-ultimo-dado') || '{}';
        const consumoJaneiroStr = body.getAttribute('data-consumo-janeiro') || '0';
        const consumoFevereiroStr = body.getAttribute('data-consumo-fevereiro') || '0';
        
        const ultimo_dado = JSON.parse(ultimo_dado_json);
        const consumoJaneiro = parseFloat(consumoJaneiroStr) || 0;
        const consumoFevereiro = parseFloat(consumoFevereiroStr) || 0;
        
        // Gráfico de barras
        const ctx2 = document.getElementById('barChart');
        if (ctx2) {
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['Janeiro', 'Fevereiro'],
                    datasets: [{
                        label: 'Consumo (kWh)',
                        data: [consumoJaneiro, consumoFevereiro],
                        backgroundColor: '#9C27B0'
                    }]
                },
                options: { responsive: false }
            });
        }
        
        // Toggle sidebar
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        const toggleBtn = document.getElementById('toggleSidebar');
        
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        });
        
        // Navegação suave
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Botão exportar
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                alert('Relatório exportado!');
            });
        }
    } catch (error) {
        console.error('Erro no JavaScript:', error);
    }
});
