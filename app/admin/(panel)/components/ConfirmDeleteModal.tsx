"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({ open, onClose, onConfirm }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold text-slate-800">Hapus Data?</h2>
        <p className="text-slate-600 mt-2">Data yang dihapus tidak bisa dikembalikan.</p>

        <div className="mt-5 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm text-slate-700">
            Batal
          </button>

          <button onClick={onConfirm} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
