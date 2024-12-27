import { SpeedInsights } from "@vercel/speed-insights/react"
import {
  faCalendarCheck,
  faCar,
  faGift,
  faGraduationCap,
  faMapLocation,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

import './App.css';
// import Background from './assets/bg.jpg';
import Background from './assets/background.jpg';
import { Header, Main } from './components/styledComponents';

function App() {
  return (
    <>
      <Header style={{ backgroundImage: `url(${Background})` }}>
        <h1>Formatura 2025</h1>
      </Header>
      <Main>
        <section className='principal'>
          <div className='divisionHat'>
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <h2 style={{ margin: 0 }}>Gabriela Mendes Jung</h2>
          <strong style={{ color: 'var(--primary)' }}>
            Análise e desenvolvimento de sistemas
          </strong>
          <p>
            É com muito carinho que lhe convido para a minha formatura do curso
            de Análise e Desenvolvimento de Sistemas da Feevale Digital! Mesmo
            sendo em um formato mais simples de formatura, gostaria de
            compartilhar esta conquista contigo, e que venham muitas outras pela
            frente!
          </p>
          <p>Acompanhe abaixo mais informações sobre o evento.</p>
        </section>
        <section>
          <div className='division'>
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <strong>Formato Gabinete</strong>
          <p>
            Formato de cerimônia formal. Diferente da solene, essa cerimônia não
            envolve discursos de paraninfos e oradores, não exige o uso de toga
            e não necessita da contratação de produtora.
          </p>
        </section>
        <section>
          <div className='division'>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </div>
          <strong>Quando?</strong>
          <p>
            A formatura ocorrerá no dia{' '}
            <b>
              <mark style={{ background: '#0891b255', color: '#fff' }}>
                29/01/2025, quarta-feira, às 19h30.
              </mark>
            </b>{' '}
            O acesso dos convidados a plateia, se dá a partir das 18h30min.
          </p>
        </section>
        <section>
          <div className='division'>
            <FontAwesomeIcon icon={faMapLocation} />
          </div>
          <strong>Onde?</strong>
          <p>
            <b>Teatro Feevale</b> - Universidade Feevale Campus II, RS-239, Novo
            Hamburgo - RS
          </p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.7402879431852!2d-51.11844031125117!3d-29.662901654169662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519439324774d07%3A0x78048628b4ba1a0e!2sTeatro%20Feevale!5e0!3m2!1spt-BR!2sbr!4v1735266586755!5m2!1spt-BR!2sbr'
            width='calc(100vw - 4rem)'
            height='500px'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>{' '}
        <section>
          <div className='division'>
            <FontAwesomeIcon icon={faCar} />
          </div>
          <strong>Estacionamento</strong>
          <p>
            Indicamos que o pagamento do estacionamento seja feito na chegada,
            para comodidade de todos, evitando filas na saída.
          </p>
        </section>
        <section>
          <div className='division'>
            <FontAwesomeIcon icon={faGift} />
          </div>
          <strong>Espero contar com a sua presença!</strong>
          <AddToCalendarButton
            label='Adicionar evento à agenda'
            name='Formatura da Gabriela - 19h30'
            startDate='2025-01-29'
            options={['Apple', 'Google', 'Yahoo', 'iCal']}
            timeZone='America/Los_Angeles'
          ></AddToCalendarButton>
        </section>
        <SpeedInsights />
      </Main>
    </>
  );
}

export default App;
