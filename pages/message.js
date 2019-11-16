import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Button, Error, Loading, Notification, Spinner } from '@weekday/elements'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config'
import PollComponent from '../components/poll.component'

const ADD_ANSWER = gql`
  mutation add_answer($objects: [answers_insert_input!]!) {
    insert_answers(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

function Message(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068
  const { router: { query }} = props
  const [userId, setUserId] = useState(query.userId)
  const [channelId, setChannelId] = useState(query.channelId)
  const [pollId, setPollId] = useState(query.pollId)
  const [addAnswer, { data }] = useMutation(ADD_ANSWER)
  const { loading, error, data } = useSubscription(gql`
    subscription {
      polls(where: { id: { _eq: ${pollId} } }) {
        id
        title
        description
        user_id
        channel_id
        expiry
        questions
        answers {
          user_id
          question_id
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Head>
        <title>Polls</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/css/styles.css" rel="stylesheet" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
        }

        body {
          background: white;
        }

        .container {
          background: white;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          display: flex;
          align-items: stretch;
          align-content: center;
          justify-content: center;
        }

        .error {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
        }

        .polls-listing-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: flex-start;
          padding: 20px;
        }
      `}</style>


      <div className="container column">
        <div className="polls-listing-container" >
          {(loading || !data) && <Spinner />}
          {(error || !data) && <div className="error"><Error message="Error loading polls" /></div>}

          {data &&
            <React.Fragment>
              {data.polls.map((poll, index) => {
                return (
                  <PollComponent
                    key={index}
                    expiry={poll.expiry}
                    title={poll.title}
                    userId={poll.user_id}
                    description={poll.description}
                    questions={poll.questions}
                    answers={poll.answers}
                    currentUserId={userId}
                    onSubmit={(questionId) => {
                      addAnswer({
                        variables: {
                          objects: [
                            {
                              question_id: questionId,
                              poll_id: pollId,
                              user_id: userId,
                            }
                          ]
                        }
                      })
                    }}
                  />
                )
              })}
            </React.Fragment>
          }
        </div>
      </div>

    </React.Fragment>
  )
}

export default withData(withRouter(Message))
