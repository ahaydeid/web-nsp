"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuccessDeleteModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold text-slate-800">Berhasil!</h2>
        <p className="text-slate-600 mt-2">Data berhasil dihapus.</p>

        <button onClick={onClose} className="mt-5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
          Tutup
        </button>
      </div>
    </div>
  );
}
