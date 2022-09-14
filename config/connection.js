import { PrismaClient } from '@prisma/client';


// dados da conexão com BD serverless
const host     = 'aws-sa-east-1.connect.psdb.cloud'
const port     = 3306
const username = Buffer.from('eWdvbHFjcTF0eGl5OXV2eGxxbXc=', 'base64').toString('ascii')
const password = Buffer.from('cHNjYWxlX3B3XzN3SDZ6VFJWUzZjWVlYM0YxQjFiYXQ0M043YTNFWk1zaE4xbXNFbDloZko=', 'base64').toString('ascii')
const database = 'commercedb'
const ssl      = true
const setSSL   = 'sslaccept=strict&sslmode=require'
const setUTF8  = 'useUnicode=true&characterEncoding=utf8&useSSL=false'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost/commercedb"
let url = `mysql://${username}:${password}@${host}/${database}`;
if (ssl) {
    url = url + `?${setSSL}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })

export { prisma }
