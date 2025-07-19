
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useAssignments = () => {
  return useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('assignments')
        .select(`
          *,
          courses (
            course_name,
            course_code
          )
        `)
        .order('due_date', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
};
