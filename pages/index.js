import React, {useState} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useRouter } from 'next/router';

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
` */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  console.log(name, setName)
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>Alura Quiz</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault()

                router.push(`/quiz?name=${name}`)
                console.log('fazendo uma submissao pelo react');
              }}
              >
                <input 
                  onChange={

                  (event) => {
                    setName(event.target.value);
                  }
              }
                  placeholder="Diz ai seu nome" />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/omariosouto" />
      </QuizBackground>

    </>
  );
}
