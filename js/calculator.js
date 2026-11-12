// js/calculator.js
document.addEventListener('DOMContentLoaded', () => {
    const facilitySelect = document.getElementById('calc-facility');
    const shiftSelect = document.getElementById('calc-shift');
    const guardsInput = document.getElementById('calc-guards');
    const sendBtn = document.getElementById('btn-send-whatsapp');

    function calculateEstimate() {
        if (!facilitySelect || !shiftSelect || !guardsInput) return;

        const hoursPerShift = parseInt(shiftSelect.value, 10) || 12;
        const count = parseInt(guardsInput.value, 10) || 1;
        const totalHoursDaily = hoursPerShift * count;
        
        // Requiere franquero si cubre las 24 hs
        const requiresRelief = hoursPerShift === 24 || totalHoursDaily >= 24;
        
        const summaryText = `Cotización solicitada:\n` +
            `- Tipo de objetivo: ${facilitySelect.value}\n` +
            `- Cobertura: ${hoursPerShift} hs diarias\n` +
            `- Guardias por turno: ${count}\n` +
            `- Incluye franquero: ${requiresRelief ? 'Sí' : 'No'}`;

        if (sendBtn) {
            const phone = "5493764000000"; // Reemplazar por tu número real
            sendBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(summaryText)}`;
        }
    }

    [facilitySelect, shiftSelect, guardsInput].forEach(elem => {
        if (elem) elem.addEventListener('change', calculateEstimate);
    });
});


