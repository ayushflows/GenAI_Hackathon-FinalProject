const { DataAPIClient } = require('@datastax/astra-db-ts');
const client = new DataAPIClient(process.env.db);
const db = client.db('https://be853ae4-2ec8-4eb0-a184-265ee7d1e86c-us-east-2.apps.astra.datastax.com');

module.exports.db = async (req, res) => {
    let fetchData = async () => {
        try {
            const results = await db
                .collection('')
            res.json({ data: results });
        } catch (error) {
            console.error('Error during query :', error);
            res.status(500).json({ error: 'Error during query' });
        }
    };
    fetchData();
};

