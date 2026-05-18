import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../services/gameService";
import { getCommentsByGame, createComment, deleteComment, editComment } from "../services/commentService";

const GameDetailPage = () => {
    const {id} = useParams();

    const [game, setGame] = useState(null);

    const [comments, setComments] = useState([])

    const [commentData, setCommentData] = useState({
        author: "",
        content: ""
    });

    const [editedCommentId, setEditedCommentId] = useState(null);

    const [editCommentData, setEditCommentData] = useState({
        author: "",
        content: ""
    })

    useEffect(() => {
        const fetchGame = async () =>{
            try{
                const data = await getGameById(id)

                setGame(data)
            }

            catch(error){
                console.error(error);
            }

        }

        const fetchComments = async () => {
            try {
                const data = await getCommentsByGame(id);

                setComments(data);
            }
            catch(error){
                console.error(error);
            }
        };

        fetchGame();
        fetchComments();
    }, [id])

    const handleCommentChange = (e) => {

        setCommentData({

            ...commentData,

            [e.target.name]: e.target.value
        });
    };

    const handleCommentSubmit = async (e) => {

        e.preventDefault();

        try {

            const newComment = {

                gameId: Number(id),

                author: commentData.author,

                content: commentData.content
            };

            const createdComment = await createComment(
                newComment
            );

            setComments((prevComments) => [
                createdComment,
                ...prevComments
            ]);

            setCommentData({

                author: "",
                content: ""
            });

        } catch (error) {

            console.error(error);
        }
    };

    const handleDeleteComment = async (commentId) => {

        const confirmed = window.confirm(
            "Czy na pewno chcesz usunąć komentarz?"
        );

        if (!confirmed) {
            return;
        }

        try {

            await deleteComment(commentId);

            setComments((prevComments) =>

                prevComments.filter(
                    (comment) =>
                        comment._id !== commentId
                )
            );

        } catch (error) {

            console.error(error);
        }
    };

    const handleEditClick = (comment) => {

        setEditedCommentId(comment._id);

        setEditCommentData({

            author: comment.author,

            content: comment.content
        });
    };

    const handleEditChange = (e) => {

        setEditCommentData({

            ...editCommentData,

            [e.target.name]: e.target.value
        });
    };

    const handleEditSubmit = async (commentId) => {
        try {

        const updatedComment =
            await editComment(

                commentId,

                editCommentData
            );

        setComments((prevComments) =>

            prevComments.map((comment) =>

                comment._id === commentId

                    ? updatedComment

                    : comment
            )
        );

        setEditedCommentId(null);

        setEditCommentData({

            author: "",
            content: ""
        });

        } catch (error) {

            console.error(error);
        }
    };
    if(!game){
        return <h1>Loading...</h1>
    }

    return (
        <div className="page-container">
            <h1>{game.gospodarze} | {game.gospodarze_gole} : {game.goscie_gole} | {game.goscie}</h1>
            <h2>Miejsce meczu: {game.stadion}</h2>
            <h2>Runda rozgrywek: {game.runda_rozgrywek}</h2>
            <h2>Data spotkania: {game.data_meczu.slice(0,10)}</h2>
            <h2>Skład sędziowski:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Rola</th>
                    </tr>
                </thead>
                <tbody>
                    {game.sedziowie.map((sedzia) => (
                        <tr key={sedzia.rola}>
                            <td>{sedzia.imie_sedziego}</td>
                            <td>{sedzia.nazwisko_sedziego}</td>
                            <td>{sedzia.rola}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Komentarze:</h2>
            <form onSubmit={handleCommentSubmit}>

                <input
                    type="text"
                    name="author"
                    placeholder="Autor"
                    value={commentData.author}
                    onChange={handleCommentChange}
                />

                <textarea
                    name="content"
                    placeholder="Treść komentarza"
                    value={commentData.content}
                    onChange={handleCommentChange}
                />

                <button type="submit" style={{margin:"0 auto"}}>
                    Dodaj komentarz
                </button>

            </form>
            
            {comments.map((comment) => (
                <div key={comment._id} className="comment-container">
                    {editedCommentId === comment._id ? (

                        <div>

                            <input
                                type="text"
                                name="author"
                                value={editCommentData.author}
                                onChange={handleEditChange}
                            />

                            <textarea
                                name="content"
                                value={editCommentData.content}
                                onChange={handleEditChange}
                            />

                            <button
                                onClick={() =>
                                    handleEditSubmit(comment._id)
                                }
                            >
                                Zapisz
                            </button>

                            <button
                                onClick={() =>
                                    setEditedCommentId(null)
                                }
                            >
                                Anuluj
                            </button>

                        </div>

                    ) : (
                        <div>
                            <h3>Autor: {comment.author}</h3>
                            <h3>{comment.content}</h3>
                            <button onClick={() =>handleEditClick(comment)}>
                                Edytuj
                            </button>

                            <button onClick={() => handleDeleteComment(comment._id)}>
                                Usuń komentarz
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default GameDetailPage;