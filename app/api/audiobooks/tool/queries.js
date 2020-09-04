const QInsertMusic = "INSERT INTO music (title, description, file_path) VALUES (?,?,?)";
const QSaveTags = "INSERT INTO tags (name_tag, music_id) VALUES (?,?)";

const QUpdateMusic = `UPDATE music SET title=?, description=?, file_path=? WHERE id=?`;
const QUpdateTag = `UPDATE tags SET name_tag=? WHERE id=?`;

const QSelectMusic = `SELECT m.id, m.title, m.description, m.file_path, JSON_ARRAYAGG(
                              JSON_OBJECT(
                                      'id', t.id,
                                      'name', t.name_tag
                                  )) as tags
                      FROM music m
                               JOIN tags t ON t.music_id = m.id
                      WHERE m.id = ? GROUP BY m.id`;
const QSearchMusic = `SELECT m.id, m.title, m.description, m.file_path, JSON_ARRAYAGG(
                              JSON_OBJECT(
                                      'id', t.id,
                                      'name', t.name_tag
                                  )) as tags
                      FROM music m
                               JOIN tags t ON t.music_id = m.id
                      WHERE m.title LIKE ?  OR m.description LIKE ? GROUP BY m.id`;
const QSelectAllMusics = `SELECT m.id, m.title, m.description, m.file_path, JSON_ARRAYAGG(
                              JSON_OBJECT(
                                      'id', t.id,
                                      'name', t.name_tag
                                  )) as tags
                      FROM music m
                               JOIN tags t ON t.music_id = m.id
                      WHERE 1 GROUP BY m.id`;
const QDeleteMusic = `DELETE music, tags FROM music 
                         LEFT JOIN tags ON music.id = tags.music_id 
                      WHERE music.id = ?`
const QDeleteTag = `DELETE FROM tags WHERE id = ?`
module.exports.QInsertMusic = QInsertMusic;
module.exports.QSelectMusic = QSelectMusic;
module.exports.QSelectAllMusics = QSelectAllMusics;
module.exports.QSearchMusic = QSearchMusic;
module.exports.QSaveTags = QSaveTags;
module.exports.QUpdateMusic = QUpdateMusic;
module.exports.QUpdateTag = QUpdateTag;
module.exports.QDeleteMusic = QDeleteMusic;
module.exports.QDeleteTag = QDeleteTag;
