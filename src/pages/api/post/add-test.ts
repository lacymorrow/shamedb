// Validate that post is not duplicate
import clientPromise from '../../../lib/mongodb';

const add = async (_: any, res: any) => {
  const client = await clientPromise;

  const post = await client
    .db(process.env.MONGODB_DB)
    .collection('posts')
    .insertOne({
      createdByUser: '61e8717cd38d770f67357134',
      timeCreated: Date.now(),
      timeUpdated: Date.now(),
      sources: [],
      videoUri: 'https://youtube.com/watch?v=7Ooa7wOKHhg',
      offender: 'Philip Brailsford',
      victim: 'Daniel Shaver',
      description:
        'Newly released bodycam footage shows former Mesa police officer Philip Brailsford shoot and kill unarmed Daniel Shaver at a hotel in Arizona. Brailsford says he shot Shaver after he reached for his waistband and was acquitted of murder charges.',
      location: 'Mesa, Arizona',
    });

  res.json(post);
};

export default add;
