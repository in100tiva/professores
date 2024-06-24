document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const reforcoRate = 35.00;
    const avancadoRate = 40.00;
    const cursoRate = 60.00;
    const workshopRate = 35.00;
    
    const reforcoHours = 3;
    const avancadoHours = 3;
    const cursoHours = 3.5;
    const workshopHours = 2;

    const classCountReforco = document.getElementById('classCountReforco').value;
    const classCountAvancado = document.getElementById('classCountAvancado').value;
    const classCountCurso = document.getElementById('classCountCurso').value;
    const classCountWorkshop = document.getElementById('classCountWorkshop').value;

    const totalReforco = (classCountReforco * reforcoHours * reforcoRate).toFixed(2);
    const totalAvancado = (classCountAvancado * avancadoHours * avancadoRate).toFixed(2);
    const totalCurso = (classCountCurso * cursoHours * cursoRate).toFixed(2);
    const totalWorkshop = (classCountWorkshop * workshopHours * workshopRate).toFixed(2);

    const totalCalculated = (parseFloat(totalReforco) + parseFloat(totalAvancado) + parseFloat(totalCurso) + parseFloat(totalWorkshop)).toFixed(2);

    document.getElementById('totalReforco').textContent = `R$ ${totalReforco}`;
    document.getElementById('totalAvancado').textContent = `R$ ${totalAvancado}`;
    document.getElementById('totalCurso').textContent = `R$ ${totalCurso}`;
    document.getElementById('totalWorkshop').textContent = `R$ ${totalWorkshop}`;
    document.getElementById('totalCalculated').textContent = totalCalculated;

    renderChart([totalReforco, totalAvancado, totalCurso, totalWorkshop]);
});

function renderChart(values) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Super Módulo de Reforço', 'Super Módulo Avançado', 'Curso', 'Workshops'],
            datasets: [{
                label: 'Valor Total (R$)',
                data: values,
                borderColor: '#ffffff', // Define a cor da linha como branca
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Define a cor de fundo dos pontos
                pointBackgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107'], // Define as cores dos pontos
                pointBorderColor: ['#007bff', '#28a745', '#dc3545', '#ffc107'], // Define as cores das bordas dos pontos
                pointRadius: 5, // Aumenta o tamanho dos pontos para melhor visualização
                pointHoverRadius: 7 // Aumenta o tamanho dos pontos ao passar o mouse
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        padding: 20,
                        usePointStyle: true // Usa círculos ao invés de quadrados para as legendas
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff' // Define a cor dos ticks do eixo y como branca
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff' // Define a cor dos ticks do eixo x como branca
                    }
                }
            }
        }
    });
}
