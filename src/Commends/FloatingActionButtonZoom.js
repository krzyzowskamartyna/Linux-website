import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ShowMore from 'react-show-more';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  }
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Linux" />
            <Tab label="VI" />
            <Tab label="Bash" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <ShowMore
              lines={1}
              more={<i className="far fa-question-circle"></i>}
              less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
              anchorClass='my-anchor-class'
            >
              <ul>
            <p> ls </p> wylistowanie zawartości katalogu <br />
                  <p> ls -l </p> wyświetlanie szczegółowe
                        <p> ls -a  </p> wyświetlanie ukrytych plików
                    <p>ls -d  </p> wyświetlanie katalogów
                    <p> ls *.txt </p> wyświetlenie wszystkich plików z rozszerzeniem .txt  <br />
              </ul>
            </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> cd kat1 </p> wejście do katalogu kat1 <br />
                    <p>cd .. </p> wejście do katalogu wyżej
                    <p>cd /home/abc/efg/kat1 </p>  wejście do katalogu kat1
                    <p>cd </p> wejście do katalogu /home/nazwa_użytkownika
                    </ul> <br />
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> mkdir kat1 </p> utworzenie katalogu kat1 <br />
                    <p>mkdir kat1 kat2 </p> utworzenie kat1 i kat2
                    <p> mkdir -p kat1 kat2 </p> uworzenie kat2 w kat1 <br /></ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>rmdir kat1 </p> usunięcie katalogu kat1 (o ile jest pusty) <br />
                    <p> rm -rf </p> usunięcie katalogu z plikami   <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>touch plik </p> utworzenie nowego pliku
                        <br />
                    <p> vi plik </p> VI jednoczenie utworzy i otworzy plik   <br /></ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>rm plik </p> usunięcie pliku <br />
                    <p> rm -r kat1 </p> kasowanie zawartość katalogu kat1 wraz z nim samym
                    <p>rm -r</p> kasowanie zawartość katalogu kat1 z pominięciem kat1  <br />
                  </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>chmod </p> zmiana praw dostępu (-rwx-rwx-rwx)  <br />
                    Pierwsza trójka (-rwx) oznacza prawa dostępu właściciela pliku. <br /> Druga - prawa dostępu grupy. <br />Trzecia trójka - prawa dostępu pozostałych . <br />
                    <p> (2<sup>2</sup>=4)</p> r - read
                    <p> (2<sup>1</sup>=2)</p> w - write
                    <p> (2<sup>0</sup>=1)</p> x - execute <br />
                    Zapis chmod 764 oznacza (4+2+1=7) (4+2+0=6) (4+0+0=4) czyli właściciel pliku posiada wszystkie prawa, grupa
                        posiada prawa odczytu i zapisu, a pozostali jedynie prawa odczytu.  <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>pwd </p> wyświetla aktualną pozycję <br />
                    Jeżeli po wpisaniu komendy pwd wyświetla się ścieżka <p>
                      /home/student/dane/katalog1
                            </p> oznacza to, że akualna pozycja to katalog1  <br />
                  </ul>
                </ShowMore> <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>cat </p> wyświetlanie zawartości pliku <br />
                    <p>cat plik1>plik2</p> przekazanie plik1 do plik2 i nadpisanie go
                    <p>  cat plik1>>plik2 </p>przekazanie plik1 do plik2 bez nadpisania
                    <p> cat plik1 | wc -l </p> cat wypisuje plik na wyjście, które jest przekierowane na program liczący wiersze wc -l     <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p>echo 'Dom' </p> wypisanie słowa "Dom" <br />
                    <p>echo 'Dom' | tr '[:lower:]' '[:upper:]'</p>  zmiana wielkości znaków. <br />Możliwe są też obliczenia matematyczne:
                            <p>
                      echo '(1 + sqrt(3))/2' | bc -l </p><br />
                  </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> grep "Dom" plik1 </p> znalezienie wszystkich
                        linii ze słowem "Dom"<br />
                    <p>    grep '^Dom' plik1 </p> znalezienie linii zaczynajacych się od 'Dom'
                     <p>    grep 'D[aio]m' plik1 </p>
                    znalezienie linii zawierających Dam, Dim lub Dom
                     <p>       grep -i 'Dom' plik1 </p>
                    nie ma znaczenia wielkość liter; grep znajdzie 'dom' i 'Dom'
                     <p>  grep -v 'Dom' plik1 </p>
                    znalezienie wszystkich linii z wyjątkiem tych, które zawierają 'Dom'
                                <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> mv  </p> przesunięcie pliku <br />
                    <p> mv plik1 plik2</p>  zmiana nazwy z plik1 na plik2
                                <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> cp  plik1 kat1</p>  przekopiowanie plik1 do kat1 <br />
                    Można przekopiować plik z katalogu, w którym sie znajdujemy do dowolnego katalogu na dysku
                    <p> cp plik1 /home/student/katalog1/katalog2</p> plik1 został przeniesiony do katalog2
                    <p> cp plik1 plik2</p>utworzenie kopii plik1 o nazwie plik2 <br /></ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> head </p> wyświetlanie pierwszych 10 linii pliku <br />
                    <p>head -5 </p> wyświetlenie pierwszych 5 linii
                    <p>history | head -5 </p> wyświetlenie 5 pierwszych pozycji w historii
                    <p> head -n 4 *.txt </p> wyświetlenie pierwszych 4 linii wszystkich plików .txt  <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> tail </p> wyświetlanie ostatnich 10 linii pliku <br />
                    <p>tail -n 5 </p> wyświetlenie ostatnich 5 linii
                    <p>tail -f  </p> monitorowanie pliku
                     <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> ps </p> wyświetlanie uruchomionych procesów <br />
                    <p> ps -u student</p> pokazanie wszystkich procesow użytkownika studentmonitorowanie pliku
                     <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> diff </p> wyświetlenie różnic pomiędzy plikami <br />
                    <p> diff plik1 plik2 </p> wyświetlenie linii różniących się od siebie w plik1 i plik2 <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> talk </p> umożliwia rozmowę między użytkownikami <br />
                    <p>talk student </p> spowoduje rozpoczęcie rozmowy z użytkownikiem student <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <p> kill </p> zabicie procesu
    
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <p> clear </p> czyszczenie okna terminala
    
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <p> whoami </p> wyświetlanie nazwy użytkownika
    
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <p>who </p> wyświetlanie listy aktualnie zalogowanych użytkowników
            </ShowMore></TabContainer>
              <TabContainer dir={theme.direction}>
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> vi nazwa_pliku </p> otwarcie pliku edytorem VI <br />
                    Jeżeli plik jeszcze nie istnieje to edytor VI go utworzy. <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> i </p> wejście w tryb edycji po lewej stronie kursora <br />
                    <p> a   </p>wejście w tryb edycji po prawej stronie kursora
               <p> Esc </p>  wyjście z trybu edycji <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> :q! </p>  wyjście z pliku bez zapisu <br />
                    <p> :q   </p> również
                <br /> </ul>
                </ShowMore>
                <br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> :w </p>  zapis pliku
                 </ul>
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> :wq </p>  wyjście z zapisem
                <br /> </ul>
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> dd </p>  kasowanie całej linii
                <br />
                    <p>  4dd</p> kasowanie 4 linii poniżej
              <p> dG </p> kasowanie od kursora do końca tekstu
              <p> d$ </p> kasowanie od kursora do końca linii
              <p>  dw</p> kasowanie od kursora do końca słowa
              <p>  x</p>   kasowanie znaku przed kursorem </ul> <br />
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> yy </p>  kopiowanie całej linii
                <br />
                    <p>  Y </p> również
              <p> yw </p> kopiowanie słowa
              </ul> <br />
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> u </p>  cofnięcie poprzedniej komendy
                </ul>
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> p </p>  wklejanie
                 </ul>
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> $ </p>  przejście do końca linii
                 </ul>
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> 0 </p>  przejście do początku linii
                 </ul>
                </ShowMore><br />
                <ShowMore
                  lines={1}
                  more={<i className="far fa-question-circle"></i>}
                  less={<i className="far fa-arrow-alt-circle-up up fa-2x"></i>}
                  anchorClass=''
                >
                  <ul>
                    <p> Poruszanie się po pliku </p> <br />
                    <p>h</p> lewo
              <p>l</p> prawo
              <p>k</p> góra
              <p>j</p> dół
                <br /> </ul>
                </ShowMore><br />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <div className="Bash">
                  <i className="fas fa-terminal"></i> skrypt rozpoczyna się od ciągu <p>#!/bin/bash</p>
                  <i className="fas fa-terminal"></i> skrypt może być wykonany na dwa sposoby:<br />
                  <p> bash mojSkrypt.sh</p>
                  <p> ./mojSkrypt.sh</p> (po wcześniejszej zmianie praw dostępu) <br />
              <i className="fas fa-terminal"></i> zmienna może być przypisywana w następujący sposób <p>zmienna=wartość</p>
                  <i className="fas fa-terminal"></i> środowisko powłoki Bash umożliwia wykonywanie podstawowych operacji arytmetycznych <br />
              <i className="fas fa-terminal"></i> Bash zapewnia również wiele typów pętli: <br />
                  Pętla  for: <br />
                  <p> for ((warunek)) </p>
                  <p className="ten"> polecenia; </p>
                  <p>done</p>
                  Pętla while:
                  <p> while [warunek] </p>
                  <p> do </p>
                  <p className="ten"> polecenia;</p>
                  <p>done</p>
                  Pętla until:
            <p>x=0;</p>
                  <p>until [ $x -eq 9];</p>
                  <p>do </p>
                  <p className="ten ">let x++; echo $x;</p>
                  <p>done</p>
                  <i className="fas fa-terminal"></i> W Bashu można tworzyć również instrukcje warunkowe if ... then ... fi
              <p>if [warunek];</p>
                  <p>then</p>
                  <p className="ten ">polecenia;</p>
                  <p>elif [warunek]; then</p>
                  <p className="ten ">polecenia</p>
                  <p>else</p>
                  <p className="ten ">polecenia</p>
                  <p>fi</p>
                  <i className="fas fa-terminal"></i> Bash 3.0 posiada wbudowaną obsługę wyrażeń regularnych
                </div>
              </TabContainer>
        </SwipeableViews>
      </div>
          );
        }
      }
      
FloatingActionButtonZoom.propTypes = {
            classes: PropTypes.object.isRequired,
          theme: PropTypes.object.isRequired,
        };
        
export default withStyles(styles, {withTheme: true })(FloatingActionButtonZoom);