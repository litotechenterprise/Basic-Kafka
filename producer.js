import { Kafka, Partitioners } from "kafkajs";
let num = 1;
const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});

const produce = async () => {
  await producer.connect();
  await producer.send({
    topic: "my-topic",
    messages: [
      {
        value: "Hello From Message #" + num,
      },
    ],
  });
};
// produce after every 3 seconds
setInterval(() => {
  produce()
    .then(() => {
      console.log("Produced Message #" + num);
      num++;
    })
    .catch(console.error);
}, 3000);
