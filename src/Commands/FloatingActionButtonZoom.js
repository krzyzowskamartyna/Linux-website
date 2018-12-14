import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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
  },
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
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  ls - wylistowanie zawartości katalogu </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  ls -l - wyświetlanie szczegółowe <br />
                  ls -a - wyświetlanie ukrytych plików <br />
                  ls -d  - wyświetlanie katalogów <br />
                  ls *.txt - wyświetlenie wszystkich plików z rozszerzeniem .txt  <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  cd kat1 - wejście do katalogu kat1  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  cd .. - wejście do katalogu wyżej <br />
                  cd /home/abc/efg/kat1 -  wejście do katalogu kat1 <br />
                  cd - wejście do katalogu /home/nazwa_użytkownika  <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  mkdir kat1 - utworzenie katalogu kat1  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  mkdir kat1 kat2 - utworzenie kat1 i kat2 <br />
                  mkdir -p kat1 kat2 -uworzenie kat2 w kat1 <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  rmdir kat1 - usunięcie katalogu kat1 (o ile jest pusty)  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  rm -rf - usunięcie katalogu z plikami <br />

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  touch plik - utworzenie nowego pliku </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  vi plik - VI jednoczenie utworzy i otworzy plik
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  rm plik - usunięcie pliku </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  rm -r kat1 - kasowanie zawartość katalogu kat1 wraz z nim samym <br />
                  rm -r - kasowanie zawartość katalogu kat1 z pominięciem kat1
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> chmod - zmiana praw dostępu (-rwx-rwx-rwx) </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  Pierwsza trójka (-rwx) oznacza prawa dostępu właściciela pliku. <br /> Druga - prawa dostępu grupy. <br />Trzecia trójka - prawa dostępu pozostałych . <br />
                  (2<sup>2</sup>=4) r - read <br />
                  (2<sup>1</sup>=2) w - write <br />
                  (2<sup>0</sup>=1) x - execute <br />
                  Zapis chmod 764 oznacza (4+2+1=7) (4+2+0=6) (4+0+0=4) czyli właściciel pliku posiada wszystkie prawa, grupa
                        posiada prawa odczytu i zapisu, a pozostali jedynie prawa odczytu.  <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> pwd - wyświetlanie aktualnej pozycji </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  Jeżeli po wpisaniu komendy pwd wyświetla się ścieżka <br />
                  /home/student/dane/katalog1 <br />
                  oznacza to, że akualna pozycja to katalog1
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> cat - wyświetlanie zawartości pliku </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  cat plik1>plik2 - przekazanie plik1 do plik2 i nadpisanie go <br />
                  cat plik1>>plik2  - przekazanie plik1 do plik2 bez nadpisania <br />
                  cat plik1 | wc -l  - cat wypisuje plik na wyjście, które jest przekierowane na program liczący wiersze wc -l     <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> echo 'Dom' - wypisanie słowa "Dom" </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  echo 'Dom' | tr '[:lower:]' '[:upper:]' -  zmiana wielkości znaków. <br />
                  Możliwe są też obliczenia matematyczne: <br />

                  echo '(1 + sqrt(3))/2' | bc -l
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> grep "Dom" plik1 - znalezienie wszystkich linii ze słowem "Dom" </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  grep '^Dom' plik1 - znalezienie linii zaczynajacych się od 'Dom' <br />
                  grep 'D[aio]m' plik1 -      znalezienie linii zawierających Dam, Dim lub Dom <br />
                  grep -i 'Dom' plik1 - nie ma znaczenia wielkość liter; grep znajdzie 'dom' i 'Dom' <br />
                  grep -v 'Dom' plik1 - znalezienie wszystkich linii z wyjątkiem tych, które zawierają 'Dom'<br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> mv - przesunięcie pliku </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  mv plik1 plik2 - zmiana nazwy z plik1 na plik2  <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> cp  plik1 kat1 - przekopiowanie plik1 do kat1 </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  Można przekopiować plik z katalogu, w którym sie znajdujemy do dowolnego katalogu na dysku <br />
                  plik1 /home/student/katalog1/katalog2 - plik1 został przeniesiony do katalog2 <br />
                  cp plik1 plik2 - utworzenie kopii plik1 o nazwie plik2   <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> head - wyświetlanie pierwszych 10 linii pliku </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  head -5 - wyświetlenie pierwszych 5 linii   <br />
                  history | head -5 - wyświetlenie 5 pierwszych pozycji w historii  <br />
                  head -n 4 *.txt - wyświetlenie pierwszych 4 linii wszystkich plików .txt   <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> tail - wyświetlanie ostatnich 10 linii pliku </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  tail -n 5 - wyświetlenie ostatnich 5 linii <br />
                  tail -f  - monitorowanie pliku   <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">      ps - wyświetlanie uruchomionych procesów </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  ps -u student - pokazanie wszystkich procesow użytkownika studentmonitorowanie pliku
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  diff - wyświetlenie różnic pomiędzy plikami </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  diff plik1 plik2 - wyświetlenie linii różniących się od siebie w plik1 i plik2
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> talk - umożliwia rozmowę między użytkownikami </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  talk student - spowoduje rozpoczęcie rozmowy z użytkownikiem student
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading">  kill - zabicie procesu
             </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading">  clear - czyszczenie okna terminala
             </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Typography className="heading">  whoami - wyświetlanie nazwy użytkownika
             </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">  vi nazwa_pliku - otwarcie pliku edytorem VI </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  Jeżeli plik jeszcze nie istnieje to edytor VI go utworzy.
                   </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">   i - wejście w tryb edycji po lewej stronie kursora </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  a  - wejście w tryb edycji po prawej stronie kursora <br />
                  Esc -  wyjście z trybu edycji
                   </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">   :q! -  wyjście z pliku bez zapisu  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  :q   - również <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading">    :w -  zapis pliku  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading"> :wq -  wyjście z zapisem  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading"> dd -  kasowanie całej linii  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  4dd- kasowanie 4 linii poniżej <br />
                  dG - kasowanie od kursora do końca tekstu <br />
                  d$ - kasowanie od kursora do końca linii <br />
                  dw - kasowanie od kursora do końca słowa <br />
                  x -  kasowanie znaku przed kursorem
                   </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">   yy -  kopiowanie całej linii  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  Y - również <br />
                  yw - kopiowanie słowa
                   </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}>
                <Typography className="heading">   Poruszanie się po pliku  </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="inside">
                  h - lewo <br />
                  l - prawo <br />
                  k - góra <br />
                  j - dół <br />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading">  u - cofnięcie poprzedniej komendy  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading">  p - wklejanie  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Typography className="heading">  $ - przejście do końca linii  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary >
                <Typography className="heading">  0  przejście do początku linii  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Typography className="heading">   /wyraz  wyszukiwanie słowa wyraz  </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div className="Bash">
              <i className="fas fa-terminal"></i> skrypt rozpoczyna się od ciągu <p>#!/bin/bash </p>
              <i className="fas fa-terminal"></i> skrypt może być wykonany na dwa sposoby:<br />
              <p> bash mojSkrypt.sh</p>
              <p> ./mojSkrypt.sh</p> (po wcześniejszej zmianie praw dostępu) <br />
              <i className="fas fa-terminal"></i> zmienna może być przypisywana w następujący sposób <p>zmienna=wartość</p>
              a korzysta się z niej używając symbolu $
              <p>echo $zmienna</p>
              <i className="fas fa-terminal"></i> Istnieją również tak zwane zmienne specjalne, przykładowo $0 oznacza nazwę bierzącego skrypu lub powłoki, a $1..$9 to parametry przekazywane do skrypu
                  <i className="fas fa-terminal"></i> środowisko powłoki Bash umożliwia wykonywanie podstawowych operacji arytmetycznych <br />  <br />
              <i className="fas fa-terminal"></i> Bash zapewnia również wiele typów pętli: <br />
              - Pętla for <br />
              - Pętla while <br />
              - Pętla until <br />
              Ich proste zastosowanie znajduje się w przykładach poniżej <br />  <br />
              <i className="fas fa-terminal"></i> W Bashu można tworzyć również instrukcje warunkowe takie jak: if ... then ... fi,  czy case  <br /> <br />

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

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);