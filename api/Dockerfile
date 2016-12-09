FROM java:8

RUN apt-get update
RUN apt-get install -y wget telnet

RUN wget --no-verbose -O /tmp/apache-maven-3.2.2.tar.gz http://archive.apache.org/dist/maven/maven-3/3.2.2/binaries/apache-maven-3.2.2-bin.tar.gz

RUN tar xzf /tmp/apache-maven-3.2.2.tar.gz -C /opt/
RUN ln -s /opt/apache-maven-3.2.2 /opt/maven
RUN ln -s /opt/maven/bin/mvn /usr/local/bin
RUN rm -f /tmp/apache-maven-3.2.2.tar.gz
ENV MAVEN_HOME /opt/maven

RUN apt-get clean

WORKDIR /api

EXPOSE 8080

#ADD /target/api-1.jar api-1.jar
#
#ENTRYPOINT ["java","-jar","api-1.jar"]