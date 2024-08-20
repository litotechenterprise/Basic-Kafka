# Kafka & Zookeeper

This is a very simple application that demonstrates the basic use of Kafka and Zookeeper within a node environement. The project consistance of a running Kafka instance AKA Broker, A Producer and a Consumer.

- Broker: Kafka runs on a cluster of servers, each of which is called a broker. Brokers handle data persistence, message retention, and the distribution of messages across the cluster.
- Producer: Producers are clients that publish (write) messages to Kafka topics. They push data to Kafka clusters, typically in real-time.
- Consumer: Consumers are clients that subscribe to (read) messages from Kafka topics. They pull data from Kafka clusters, processing it as needed.

## Data Flow

1. Producers send messages to Kafka topics. The messages are distributed across the available partitions of the topic, either randomly or based on a specific key
2. Kafka brokers receive the messages and store them on disk in the corresponding partition.
3. Consumers subscribe to topics and read messages from the partitions. Kafka keeps track of the offset, which indicates the position of the last message read by each consumer. Consumers can read messages from any offset, allowing them to reprocess data if needed.

## Installation

To use this project, Docker must be installed on your local machine. If Docker is not already installed, please use this [link](https://docs.docker.com/get-docker/) to install it.

To install all project dependencies please run the following command:

```bash
    npm install
```

## Usage

Kindly follow the instructions to launch the application.

### Starting the Kafka Broker

```bash
    docker-compose up
```

### Starting the Producer

Open a new termial window, run the following command:

```bash
    npm run producer
```

## Starting the Consumer

Open a new termial window, run the following command:

```bash
    npm run consumer
```
