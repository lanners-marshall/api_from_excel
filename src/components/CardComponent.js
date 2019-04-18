import React from 'react';
import { Card, Header } from 'semantic-ui-react'

const CardComponent = (props) => {
	const {l1, l2, l3, ask, feedback, contact } = props.info
	return (
		<Card style={{width: "48%"}}>
			<Card.Content>
				<Card.Header>
					Student Form
				</Card.Header>
				<Card.Description>
					<p>Learned</p>
					<ul>
						<li>{l1}</li>
						<li>{l2}</li>
						<li>{l3}</li>
					</ul>
					{ask ? (<div><p>Question</p>{ask}</div>) 
						: feedback ? (<div><p>Feedback</p><p>{feedback}</p></div>)
						: contact ? (<div>- {contact}</div>)
						: null
					}
				</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default CardComponent;




