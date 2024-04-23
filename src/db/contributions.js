const { supabase } = require('./supabaseClient');

async function addContribution(userId, contributionScore) {
    try {
        const { data, error } = await supabase
            .from('contributions')
            .select('*')
            .eq('user', userId)
            .single();

        if (error) throw error;

        if (data) {
            // Update existing record
            const updates = {
                daily: data.daily + contributionScore,
                weekly: data.weekly + contributionScore,
                monthly: data.monthly + contributionScore,
                yearly: data.yearly + contributionScore
            };

            const { error: updateError } = await supabase
                .from('contributions')
                .update(updates)
                .match({ id: data.id });

            if (updateError) throw updateError;
        } else {
            // Create new record
            const newRecord = {
                user: userId,
                daily: contributionScore,
                weekly: contributionScore,
                monthly: contributionScore,
                yearly: contributionScore
            };

            const { error: insertError } = await supabase
                .from('contributions')
                .insert([newRecord]);

            if (insertError) throw insertError;
        }
    } catch (e) {
        console.error('Error in addContribution:', e);
        throw e;
    }
}

async function getContributionCounts(userId, period) {
    try {
        const { data, error } = await supabase
            .from('contributions')
            .select(period)
            .eq('user', userId)
            .single();

        if (error) throw error;
        return data ? data[period] : 0;
    } catch (e) {
        console.error('Error in getContributionCounts:', e);
        throw e;
    }
}

async function getTopContributors(count, period) {
    try {
        const { data, error } = await supabase
            .from('contributions')
            .select(`user, ${period}`)
            .order(period, { ascending: false })
            .limit(count);

        if (error) throw error;
        return data;
    } catch (e) {
        console.error('Error in getTopContributors:', e);
        throw e;
    }
}


module.exports = { addContribution, getContributionCounts,getTopContributors };
