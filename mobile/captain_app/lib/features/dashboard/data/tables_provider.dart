import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../auth/data/auth_provider.dart';
import '../domain/table_model.dart';

final tablesProvider = FutureProvider<List<TableModel>>((ref) async {
  final apiClient = ref.watch(apiClientProvider);
  // Assuming the user is logged in and has a branchId from the auth response/token
  // For now, we fetch all tables. A real implementation would filter by branch.

  final response = await apiClient.dio.get('/tables');
  final data = response.data as List;
  return data.map((e) => TableModel.fromJson(e)).toList();
});
