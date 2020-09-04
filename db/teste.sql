SELECT  m.*, GROUP_CONCAT(name_tag,t.id ORDER BY t.music_id) as tags
FROM    music m
            JOIN    tags t
                    ON      t.music_id = m.id
GROUP BY
    m.id

SELECT m.id, m.title, t.tag_array
FROM   music      m
           JOIN  (  -- or LEFT JOIN ?
    SELECT it.music_id AS id, json_arrayagg(t.name_tag) AS tag_array
    FROM   tags it
               JOIN   tags       t  ON t.id = it.music_id
    GROUP  BY it.music_id
) t USING (id);

SELECT  m.*, json_array(json_objectagg(t.id,t.name_tag)) as tags
FROM    music m
            JOIN    tags t
                    ON      t.music_id = m.id
GROUP BY
    m.id
