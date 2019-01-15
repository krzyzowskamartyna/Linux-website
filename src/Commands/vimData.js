const vimData = [
    {
        heading: 'vi nazwa_pliku - otwarcie pliku edytorem VI',
        inside: 'Jeżeli plik jeszcze nie istnieje edytpor VI go utworzy',
        id: 0
    },
    {
        heading: 'Poruszanie się po pliku',
        inside: 'h - lewo',
        inside2: 'l - prawo',
        inside3: 'k - góra',
        inside4: 'j - dół',
        id: 1,
    },
    {
        heading: 'i - wejście w tryb wdycji po lewej stronie kursora',
        inside: 'a - wejście w tryb wdycji po prawej stronie kursora',
        inside2: 'Esc - wyjście z trybu edycji',
        id: 2,

    },
    {
        heading: ':q! - wyjście z pliku bez zapisu',
        inside: ':q - również',
        id: 3,
    },
    {
        heading: ':w - zapis pliku',
        inside: ':w! - zapisanie pliku pod podaną nazwą (już istniejącą)',
        id: 4,
    },
    {
        heading: ':wq - wyjście z zapisem',
        id: 5,
    },
    {
        heading: 'dd - kasowanie całej linii',
        inside: '4dd - kasowanie 4 linii poniżej',
        inside2: 'd$ - kasowanie od kursora do końca linii',
        inside3: 'dw - kasowanie od kursora do końca słowa',
        inside4: 'x - kasowanie znaku przed kursore',
        id: 6,

    },
    {
        heading: 'yy - kopiowanie całej linii',
        inside: 'Y - również',
        inside2: 'yw - kopiowanie słowa',
        id: 7,
    },

    {
        heading: 'p -wklejanie',
        id: 8,
    },
    {
        heading: '$ - przejście do końca linii',
        id: 9,
    },
    {
        heading: '0  przejście do początku linii',
        id: 10,
    },
    {
        heading: '/wyraz - wyszukiwanie słowa wyraz ',
        inside: 'n - szukanie następnego wystąpienia wyrazu',
        id: 11,
    },
    {
        heading: '^ - przesunięcie do pierwszego znaku w linii',
        id: 13,
    },
    {
        heading: 'G - przesunięcie do ostatniego znaku w pliku',
        id: 14,
    },
    {
        heading: 'split - podział okna w pionie i poziomie',
        id: 15,
    },
    {
        heading: 'set number - włączenie numeracji wierszy',
        id: 16
    },
    {
        heading: 'Tryby',
        inside: 'NORMAL - wszystkie powyższe komendy wykonywane są w tym trybie',
        inside2: 'INSERT - wejście z trybu NORMAL za pomocą i lub a. Wyjście Esc (powrót do NORMAL)',
        inside3: 'VISUAL - wejście z trybu normal za pomocą v. Wyjście Esc (powrót do NORMAL)'
    }

]
export default vimData;