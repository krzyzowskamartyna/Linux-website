const linuxData = [
  {
    heading: 'ls - wylistowanie zawartości katalogu',
    inside: 'ls -l - wyświetlanie szczegółowe ',
    inside2: 'ls -a - wyświetlanie ukrytych plików',
    inside3: 'ls -d - wyświetlanie katalogów ',
    inside4: 'ls *.txt - wyświetlenie wszystkich plików z rozszerzeniem .txt ',
    id: 0,
  },
  {
    heading: 'cd kat1 - wejście do katalogu kat1',
    inside: "cd .. - wejście do katalogu wyżej",
    inside2: "cd /home/abc/efg/kat1 -  wejście do katalogu kat1",
    inside3: "cd - wejście do katalogu /home/nazwa_użytkownika",
    id: 1,
  },
  {
    heading: 'mkdir kat1 - utworzenie katalogu kat1',
    inside: 'mkdir kat1 kat2 - utworzenie kat1 i kat2',
    inside2: 'mkdir -p kat1 kat2 -uworzenie kat2 w kat1',
    id: 2,
  },
  {
    heading: ' rmdir kat1 - usunięcie katalogu kat1 (o ile jest pusty)',
    inside: 'rm -rf - usunięcie katalogu z plikami',
    id: 3,
  },
  {
    heading: 'touch plik - utworzenie nowego pliku',
    inside: 'vi plik - VI jednoczenie utworzy i otworzy plik',
    id: 4
  },
  {
    heading: 'rm plik - usunięcie pliku',
    inside: ' rm -r kat1 - kasowanie zawartość katalogu kat1 wraz z nim samym',
    inside2: ' rm -r - kasowanie zawartość katalogu kat1 z pominięciem kat1',
    id: 5,
  },
  {
    heading: 'chmod - zmiana praw dostępu (-rwx-rwx-rwx)',
    inside: '  Pierwsza trójka (-rwx) oznacza prawa dostępu właściciela pliku. Druga - prawa dostępu grupy. Trzecia trójka - prawa dostępu pozostałych .',
    id: 6,
  },
  {
    heading: 'pwd - wyświetlanie aktualnej pozycji',
    inside: 'Jeżeli po wpisaniu komendy pwd wyświetla się ścieżka',
    inside2: '/home/student/dane/katalog1',
    inside3: 'oznacza to, że akualna pozycja to katalog1',
    id: 7,
  },
  {
    heading: 'cat - wyświetlanie zawartości pliku ',
    inside: 'cat plik1>plik2 - przekazanie plik1 do plik2 i nadpisanie go',
    inside2: 'cat plik1>>plik2  - przekazanie plik1 do plik2 bez nadpisania',
    inside3: 'cat plik1 | wc -l  - cat wypisuje plik na wyjście, które jest przekierowane na program liczący wiersze wc -l',
    id: 8
  }
  ,
  {
    heading: "echo 'Dom' - wypisanie słowa 'Dom'",
    inside: "echo 'Dom' | tr '[:lower:]' '[:upper:]' -  zmiana wielkości znaków.",
    inside2: "Możliwe są też obliczenia matematyczne",
    inside3: " echo '(1 + sqrt(3))/2' | bc -l",
    id: 9,
  },
  {
    heading: "grep 'Dom' plik1 - znalezienie wszystkich linii ze słowem 'Dom'",
    inside: "grep '^Dom' plik1 - znalezienie linii zaczynajacych się od 'Dom'",
    inside2: "grep 'D[aio]m' plik1 - znalezienie linii zawierających Dam, Dim lub Dom",
    inside3: "grep -i 'Dom' plik1 - nie ma znaczenia wielkość liter; grep znajdzie 'dom' i 'Dom'",
    inside4: "grep -v 'Dom' plik1 - znalezienie wszystkich linii z wyjątkiem tych, które zawierają 'Dom'",
    id: 10,
  },
  {
    heading: 'mv - przesunięcie pliku',
    inside: 'mv plik1 plik2 - zmiana nazwy z plik1 na plik2o',
    id: 11
  },
  {
    heading: "cp  plik1 kat1 - przekopiowanie plik1 do kat1",
    inside: "Można przekopiować plik z katalogu, w którym sie znajdujemy do dowolnego katalogu na dysku",
    inside2: "plik1 /home/student/katalog1/katalog2 - plik1 został przeniesiony do katalog2",
    inside3: "cp plik1 plik2 - utworzenie kopii plik1 o nazwie plik2",
    id: 12
  },
  {
    heading: "head - wyświetlanie pierwszych 10 linii pliku",
    inside: "head -5 - wyświetlenie pierwszych 5 linii",
    inside2: "history | head -5 - wyświetlenie 5 pierwszych pozycji w historii",
    inside3: "head -n 4 *.txt - wyświetlenie pierwszych 4 linii wszystkich plików .txt",
    id: 13
  },
  {
    heading: "tail - wyświetlanie ostatnich 10 linii pliku",
    inside: "tail -n 5 - wyświetlenie ostatnich 5 linii",
    inside2: "tail -f  - monitorowanie pliku",
    id: 14
  },
  {
    heading: "ps - wyświetlanie uruchomionych procesów",
    inside: "ps -u student - pokazanie wszystkich procesow użytkownika studentmonitorowanie pliku",
    id: 15
  },
  {
    heading: "diff - wyświetlenie różnic pomiędzy plikami",
    inside: " diff plik1 plik2 - wyświetlenie linii różniących się od siebie w plik1 i plik2",
    id: 16
  },
  {
    heading: "talk - umożliwia rozmowę między użytkownikami",
    inside: " talk student - spowoduje rozpoczęcie rozmowy z użytkownikiem student",
    id: 17
  },
  {
    heading: "kill - zabicie procesu",
    inside: "killall - zakończenie wszystkich procesów o podanej nazwie",
    id: 18
  },
  {
    heading: "whoami - wyświetlanie nazwy zalogowanego użytkownika ",
    inside: "who - wyświetlanie wszystkich zalogowanych użytkowników",
    inside2: "who -b - wyświetlanie daty i godziny zalogowania do systemu",
    id: 20
  }
];

export default linuxData;