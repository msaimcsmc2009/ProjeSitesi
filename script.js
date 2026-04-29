// Navigasyon çubuğunu kaydırırken küçültme efekti
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animasyonu (Sayfa aşağı indikçe elemanların profesyonelce belirmesi)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Elemanın görünmeye başlayacağı mesafe

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Sayfa yüklendiğinde ve kaydırıldığında animasyonu tetikle
window.addEventListener('scroll', reveal);
reveal(); // İlk yüklemede ekranda olanları hemen göster