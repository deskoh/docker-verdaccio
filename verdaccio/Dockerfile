FROM verdaccio/verdaccio:5.13.3

USER root
RUN npm i -g verdaccio-offline-storage && \
    npm cache clear --force

USER 10001
