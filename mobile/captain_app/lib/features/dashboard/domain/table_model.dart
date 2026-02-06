class TableModel {
  final int id;
  final String tableNumber;
  final int? capacity;
  final String? status; // 'FREE', 'OCCUPIED', 'BILLED' - logic to be added

  TableModel({
    required this.id,
    required this.tableNumber,
    this.capacity,
    this.status = 'FREE',
  });

  factory TableModel.fromJson(Map<String, dynamic> json) {
    return TableModel(
      id: json['id'],
      tableNumber: json['tableNumber'],
      capacity: json['capacity'],
      // We'll calculate status from active orders later, defaulting to FREE for now
    );
  }
}
