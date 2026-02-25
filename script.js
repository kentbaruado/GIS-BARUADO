const {createClient} = supabase
const supabaseUrl = 'https://mnkwqjnscymdemdtjrjz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ua3dxam5zY3ltZGVtZHRqcmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NjU2ODksImV4cCI6MjA4NzU0MTY4OX0.kZOZFqpEk_SaIiY7g5VcKhAMnysmRITfaQbdMiT62g4'

const supabases = createClient(supabaseUrl, supabaseAnonKey);

async function getLocations() {
    const { data, error } = await supabases.from('Locations').select('*');

    if (error) console.error(error);
    else console.log("Locations:", data);
}
getLocations();