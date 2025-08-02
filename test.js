// test.js
const mysqlTest = require('mysql2/promise');

(async () => {
  const config = {
    host:     'rafiksahed.com',
    user:     'fnspzkqh_user1',
    password: '4B8471a956@37',
    database: 'fnspzkqh_gklm',
    
  };

  try {
    const connection = await mysqlTest.createConnection(config);
    console.log('✅ Connexion réussie à la base MySQL !');

    const [rows] = await connection.execute('SELECT * FROM clients');
    console.log(rows);

    await connection.end();
    console.log('🔌 Déconnexion terminée.');
  } catch (err) {
    console.error('❌ Erreur de connexion :', err.message);
    process.exit(1);
  }
})();
