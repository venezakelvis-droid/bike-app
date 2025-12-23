import { useState } from "react";
import "../styles/pages/PartsEdit.css";
import SidBar from "../components/Sidbar";
import type { Part } from "../interfaces/IPart";



function PartsEdit() {
    // stats 
    const [parts, setParts] = useState<Part[]>([
        { id: 1, name: "Pastilha de Freio", category: "Moto", price: "89.90", stock: 10 },
        { id: 2, name: "Corrente Reforçada", category: "Moto", price: "159.90", stock: 5 },
        { id: 3, name: "Câmara de Ar", category: "Bike", price: "29.90", stock: 20 },
    ]);

    const [form, setForm] = useState<Omit<Part, "id">>({
        name: "",
        category: "Moto",
        price: "",
        stock: 0,
    });

    const [editingId, setEditingId] = useState<number | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalCreate, setIsModalCreate] = useState(false);

    // actions 
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();

        setParts((prev) => [
            ...prev,
            { id: Date.now(), ...form },
        ]);

        setForm({ name: "", category: "Moto", price: "", stock: 0 });
    }

    const handleEdit = (part: Part) => {
        setEditingId(part.id);
        setForm({
            name: part.name,
            category: part.category,
            price: part.price,
            stock: part.stock,
        });
        setIsModalOpen(true);
    }

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        if (!editingId) return;

        setParts((prev) =>
            prev.map((p) =>
                p.id === editingId ? { id: editingId, ...form } : p
            )
        );

        setIsModalOpen(false);
        setEditingId(null);
    }

    const handleDelete = (id: number) => {
        if (confirm("Deseja realmente excluir esta peça?")) {
            setParts((prev) => prev.filter((p) => p.id !== id));
        }
    }

    const handleClickNew = () => {
        setIsModalCreate(!isModalCreate)
    }

    return (
        <div className="admin-layout">
            <SidBar />

            <main className="admin-content">
                <h1>Gerenciar Peças</h1>


                {/* FORM CRIAR */}
                {isModalCreate && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2>Nova Peça</h2>

                            <form className="parts-form" onSubmit={handleCreate}>
                                <input
                                    name="name"
                                    placeholder="Nome da peça"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                                <select
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                >
                                    <option value="Moto">Moto</option>
                                    <option value="Bike">Bike</option>
                                </select>

                                <input
                                    name="price"
                                    placeholder="Preço"
                                    value={form.price}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    name="stock"
                                    type="number"
                                    placeholder="Estoque"
                                    value={form.stock}
                                    onChange={handleChange}
                                />

                                <div className="modal-actions">
                                    <button type="submit">Criar</button>
                                    <button
                                        type="button"
                                        className="cancel"
                                        onClick={handleClickNew}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}


                {/* LISTAGEM */}
                <section className="parts-list">
                    <div className="parts-list-header">
                        <h2>Lista de Peças</h2>
                        <h3 onClick={handleClickNew}>+ Adicionar</h3>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>

                        </thead>

                        <tbody>
                            {parts.map((part) => (
                                <tr key={part.id}>
                                    <td>{part.name}</td>
                                    <td>{part.category}</td>
                                    <td>R$ {part.price}</td>
                                    <td>{part.stock}</td>
                                    <td className="actions">
                                        <button onClick={() => handleEdit(part)}>Editar</button>
                                        <button
                                            className="danger"
                                            onClick={() => handleDelete(part.id)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>

            {/* MODAL EDITAR */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Editar Peça</h2>

                        <form onSubmit={handleUpdate}>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                            >
                                <option value="Moto">Moto</option>
                                <option value="Bike">Bike</option>
                            </select>

                            <input
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                required
                            />

                            <input
                                name="stock"
                                type="number"
                                value={form.stock}
                                onChange={handleChange}
                            />

                            <div className="modal-actions">
                                <button type="submit">Salvar</button>
                                <button
                                    type="button"
                                    className="cancel"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PartsEdit;
